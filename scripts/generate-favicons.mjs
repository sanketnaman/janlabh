import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function createFavicons() {
  const svgPath = path.resolve('public/favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // Generate PNGs at Google/Apple recommended sizes
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png96 = await sharp(svgBuffer).resize(96, 96).png().toBuffer();
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();

  // Save PNG files in public directory
  fs.writeFileSync('public/favicon-48x48.png', png48);
  fs.writeFileSync('public/favicon-96x96.png', png96);
  fs.writeFileSync('public/favicon-192x192.png', png192);
  fs.writeFileSync('public/apple-touch-icon.png', png180);

  // Build binary multi-layer ICO with 16x16, 32x32, 48x48 (Google loves 48px square)
  const images = [
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ];

  const headerLength = 6;
  const dirEntryLength = 16;
  const numImages = images.length;
  let offset = headerLength + numImages * dirEntryLength;

  const header = Buffer.alloc(headerLength);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(numImages, 4); // number of images

  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntryLength);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  const icoBuffer = Buffer.concat([
    header,
    ...dirEntries,
    ...images.map((img) => img.buffer),
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('Successfully created real binary favicon.ico and PNG favicons!');
  console.log('ICO size:', icoBuffer.length, 'bytes');
  console.log('ICO magic header:', icoBuffer.slice(0, 4).toString('hex'));
}

createFavicons().catch(console.error);
