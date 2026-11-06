<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | JanLabh.in</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          :root {
            --bg-body: #f8fafc;
            --bg-card: #ffffff;
            --text-main: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --primary: #d97706;
            --primary-hover: #b45309;
            --badge-bg: #fef3c7;
            --badge-text: #92400e;
            --badge-border: #fde68a;
            --table-hover: #f1f5f9;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg-body: #020617;
              --bg-card: #0f172a;
              --text-main: #f8fafc;
              --text-muted: #94a3b8;
              --border: #1e293b;
              --primary: #f59e0b;
              --primary-hover: #fbbf24;
              --badge-bg: #451a03;
              --badge-text: #fde68a;
              --badge-border: #78350f;
              --table-hover: #1e293b;
            }
          }
          * {
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            background-color: var(--bg-body);
            color: var(--text-main);
            margin: 0;
            padding: 24px 16px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }
          .header {
            padding: 28px 32px;
            border-bottom: 1px solid var(--border);
            background: linear-gradient(180deg, rgba(217, 119, 6, 0.04) 0%, transparent 100%);
          }
          .brand-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
          }
          .brand-title {
            font-size: 22px;
            font-weight: 800;
            color: var(--text-main);
            margin: 0;
          }
          .brand-tag {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            background: var(--badge-bg);
            color: var(--badge-text);
            border: 1px solid var(--badge-border);
            padding: 3px 8px;
            border-radius: 9999px;
          }
          .desc {
            color: var(--text-muted);
            font-size: 13px;
            margin: 4px 0 0 0;
          }
          .stats-bar {
            padding: 16px 32px;
            background: var(--bg-body);
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 13px;
            color: var(--text-muted);
            flex-wrap: wrap;
            gap: 8px;
          }
          .stats-count {
            font-weight: 700;
            color: var(--primary);
          }
          .table-responsive {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          th {
            background: var(--bg-body);
            color: var(--text-muted);
            font-weight: 600;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            padding: 12px 18px;
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 12px 18px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }
          tr:hover td {
            background-color: var(--table-hover);
          }
          .col-index {
            width: 48px;
            color: var(--text-muted);
            font-size: 12px;
            text-align: center;
          }
          .url-link {
            color: var(--text-main);
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          .url-link:hover {
            color: var(--primary);
            text-decoration: underline;
          }
          .badge-priority {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 11px;
            background: var(--badge-bg);
            color: var(--badge-text);
            border: 1px solid var(--badge-border);
          }
          .freq-text {
            color: var(--text-muted);
            text-transform: capitalize;
            font-size: 12px;
          }
          .date-text {
            color: var(--text-muted);
            font-size: 12px;
            white-space: nowrap;
          }
          .footer {
            padding: 16px 32px;
            background: var(--bg-body);
            border-top: 1px solid var(--border);
            text-align: center;
            font-size: 12px;
            color: var(--text-muted);
          }
          .footer a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand-row">
              <h1 class="brand-title">JanLabh.in XML Sitemap</h1>
              <span class="brand-tag">Verified Public Index</span>
            </div>
            <p class="desc">
              This XML Sitemap protocol is indexed by search engines like Google, Bing, and DuckDuckGo.
              It lists authoritative URLs for Central &amp; State government welfare schemes, hubs, and tools.
            </p>
          </div>

          <div class="stats-bar">
            <div>
              Total Indexed URLs: <span class="stats-count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
            </div>
            <div>
              Format: <span style="font-weight:600;">Sitemaps XML 0.9 with W3C Datetime</span>
            </div>
          </div>

          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th class="col-index">#</th>
                  <th>URL</th>
                  <th style="width: 100px;">Priority</th>
                  <th style="width: 130px;">Change Freq</th>
                  <th style="width: 130px;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="col-index"><xsl:value-of select="position()"/></td>
                    <td>
                      <xsl:variable name="itemUrl"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                      <a href="{$itemUrl}" class="url-link" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:if test="sitemap:priority">
                        <span class="badge-priority"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:if>
                    </td>
                    <td class="freq-text">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td class="date-text">
                      <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            Generated by <a href="https://janlabh.in">JanLabh.in</a> — Independent Public Civic Guidance Platform.
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
