import os
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

# Register Unicode fonts
pdfmetrics.registerFont(TTFont('Nirmala', 'C:\\Windows\\Fonts\\Nirmala.ttf'))
pdfmetrics.registerFont(TTFont('Nirmala-Bold', 'C:\\Windows\\Fonts\\NirmalaB.ttf'))

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        # Top line
        self.setStrokeColor(colors.HexColor('#059669'))
        self.setLineWidth(2)
        self.line(36, A4[1] - 30, A4[0] - 36, A4[1] - 30)

        # Footer
        self.setFont('Nirmala', 8)
        self.setFillColor(colors.HexColor('#64748b'))
        footer_text = "जनलाभ (JanLabh.in) - नागरिक कल्याण व सरकारी योजना डायरेक्टरी 2026 | ऑनलाइन पात्रता जांचें: janlabh.in/states/jharkhand"
        self.drawString(36, 25, footer_text)

        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(A4[0] - 36, 25, page_str)
        self.restoreState()

def build_pdf():
    os.makedirs('public/downloads', exist_ok=True)
    pdf_filename = 'public/downloads/jharkhand-sarkari-yojana-directory-2026.pdf'

    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=42,
        bottomMargin=42
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        fontName='Nirmala-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#0f172a'),
        alignment=1
    )
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        fontName='Nirmala',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#059669'),
        alignment=1
    )
    badge_style = ParagraphStyle(
        'DocBadge',
        fontName='Nirmala',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#475569'),
        alignment=1
    )
    cat_heading_style = ParagraphStyle(
        'CategoryHeading',
        fontName='Nirmala-Bold',
        fontSize=12,
        leading=15,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=8,
        spaceAfter=4
    )
    tbl_header_style = ParagraphStyle(
        'TblHeader',
        fontName='Nirmala-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white
    )
    tbl_name_style = ParagraphStyle(
        'TblName',
        fontName='Nirmala-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0f172a')
    )
    tbl_body_style = ParagraphStyle(
        'TblBody',
        fontName='Nirmala',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor('#334155')
    )
    tbl_link_style = ParagraphStyle(
        'TblLink',
        fontName='Nirmala',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor('#0284c7')
    )
    note_box_style = ParagraphStyle(
        'NoteBox',
        fontName='Nirmala',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#1e293b')
    )

    story = []

    # Title header
    story.append(Paragraph("झारखंड सरकारी योजना डायरेक्टरी 2026", title_style))
    story.append(Paragraph("Jharkhand Government All Welfare Schemes Directory & Eligibility List", subtitle_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("प्रमाणित संकलन | नागरिक, छात्र एवं प्रज्ञा केंद्र (CSC) सहायतार्थ | JanLabh.in द्वारा सत्यापित", badge_style))
    story.append(Spacer(1, 10))

    # Helper function to create section tables
    def create_category_table(category_name, rows_data):
        elements = []
        elements.append(Paragraph(category_name, cat_heading_style))

        # Table data
        header_row = [
            Paragraph("क्र.", tbl_header_style),
            Paragraph("योजना का नाम", tbl_header_style),
            Paragraph("वित्तीय लाभ / सहायता", tbl_header_style),
            Paragraph("पात्रता एवं शर्तें", tbl_header_style),
            Paragraph("आधिकारिक पोर्टल / विभाग", tbl_header_style)
        ]
        tbl_data = [header_row]

        for idx, (name, benefit, elig, portal) in enumerate(rows_data, 1):
            tbl_data.append([
                Paragraph(str(idx), tbl_body_style),
                Paragraph(name, tbl_name_style),
                Paragraph(benefit, tbl_body_style),
                Paragraph(elig, tbl_body_style),
                Paragraph(portal, tbl_link_style)
            ])

        col_widths = [20, 140, 135, 140, 88]
        t = Table(tbl_data, colWidths=col_widths, repeatRows=1)
        t.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#0f766e')),
            ('ALIGN', (0, 0), (0, -1), 'CENTER'),
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#cbd5e1')),
            ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#f8fafc')]),
            ('TOPPADDING', (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
            ('LEFTPADDING', (0, 0), (-1, -1), 4),
            ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ]))
        elements.append(t)
        elements.append(Spacer(1, 8))
        return elements

    # 1. Women & Child
    cat1 = [
        ("मुख्यमंत्री मंईयां सम्मान योजना (JMMSY)", "₹1,000/माह (सालाना ₹12,000) सीधे खाते में", "18-50 वर्ष आयु, झारखंड निवासी, गैर-करदाता परिवार", "mmmsy.jharkhand.gov.in"),
        ("सावित्रीबाई फुले किशोरी समृद्धि योजना", "कुल ₹40,000 वित्तीय अनुदान (कक्षा 8 से 12वीं तक)", "सरकारी/सहायताप्राप्त स्कूल की छात्राएं, 18-19 वर्ष", "jharsewa.jharkhand.gov.in"),
        ("मुख्यमंत्री कन्यादान योजना", "₹30,000 एकमुश्त आर्थिक सहायता", "बीपीएल/निर्धन कन्या के विवाह हेतु, न्यूनतम आयु 18 वर्ष", "jharsewa.jharkhand.gov.in"),
        ("मातृ वंदना योजना (राज्य टॉप-अप)", "₹5,000 से ₹6,000 किस्तों में वित्तीय पोषण भत्ता", "गर्भवती व धात्री माताएं (प्रथम व द्वितीय प्रसव)", "wcd.nic.in")
    ]
    story.extend(create_category_table("1. महिला एवं बालिका कल्याण योजनाएं (Women & Child Welfare)", cat1))

    # 2. Rural Housing & Development
    cat2 = [
        ("अबुआ आवास योजना (AAY)", "3 कमरों का पक्का मकान (₹2 लाख + 95 दिन मनरेगा मजदूरी)", "कच्चे मकान/बेघर ग्रामीण परिवार, SECC आवास से छूटे", "aay.jharkhand.gov.in"),
        ("प्रधानमंत्री आवास योजना - ग्रामीण (PMAY-G)", "₹1,20,000 + ₹12,000 शौचालय निर्माण सहायता", "SECC 2011 स्थायी प्रतीक्षा सूची में दर्ज परिवार", "pmayg.nic.in"),
        ("बिरसा हरित ग्राम योजना", "फलदार बागवानी लगाने पर आर्थिक अनुदान व मनरेगा मजदूरी", "ग्रामीण किसान, बंजर व अनुपयोगी भूमि धारक", "rural.jharkhand.gov.in"),
        ("नीलांबर-पीतांबर जल समृद्धि योजना", "जल संरक्षण, ट्रेंच व मेड़बंदी निर्माण कार्य", "जल संकटग्रस्त गांवों के कृषक व मनरेगा मजदूर", "rural.jharkhand.gov.in")
    ]
    story.extend(create_category_table("2. ग्रामीण आवास एवं विकास योजनाएं (Rural Housing & Development)", cat2))

    story.append(PageBreak())

    # 3. Agriculture & Livestock
    cat3 = [
        ("झारखंड कृषि ऋण माफी योजना (JKRMY)", "केसीसी (KCC) बैंक ऋण ₹2,00,000 तक शत-प्रतिशत माफ", "झारखंड निवासी रैयत/गैर-रैयत राशन कार्ड धारक किसान", "jkrmy.jharkhand.gov.in"),
        ("बिरसा फसल बीमा योजना", "मात्र ₹1 टोकन प्रीमियम पर 100% सूखा/बाढ़ फसल भरपाई", "राज्य के सभी धान, मक्का व दलहन उत्पादक कृषक", "agricoop.nic.in"),
        ("मुख्यमंत्री पशुधन विकास योजना", "गाय, भैंस, बकरी व सुअर पालन पर 50% से 90% तक सब्सिडी", "पशुपालक, प्रगतिशील किसान, स्वयं सहायता समूह (SHG)", "ahd.jharkhand.gov.in"),
        ("मुख्यमंत्री सुखाड़ राहत योजना", "सूखा प्रभावित किसान परिवारों को ₹3,500 एकमुश्त अग्रिम राहत", "प्रखंड स्तरीय सूखा प्रभावित घोषित क्षेत्रों के किसान", "disaster.jharkhand.gov.in")
    ]
    story.extend(create_category_table("3. किसान एवं पशुपालन कल्याण (Farmer & Animal Welfare)", cat3))

    # 4. Youth, Education & Employment
    cat4 = [
        ("गुरुजी स्टूडेंट क्रेडिट कार्ड योजना (GSCC)", "₹15 लाख तक का रियायती शिक्षा ऋण (मात्र 4% ब्याज)", "10वीं/12वीं झारखंड से उत्तीर्ण उच्च शिक्षा के छात्र", "gscc.jharkhand.gov.in"),
        ("एकलव्य प्रशिक्षण योजना", "UPSC, JPSC, बैंकिंग निशुल्क कोचिंग + ₹2,500/माह भत्ता", "स्नातक/अंतिम वर्ष के मेधावी छात्र (18-35 वर्ष)", "jceceb.jharkhand.gov.in"),
        ("मुख्यमंत्री सारथी योजना (बिरसा)", "निशुल्क कौशल विकास प्रशिक्षण + ₹1,000/माह बेरोजगारी भत्ता", "18-35 वर्ष के गैर-कार्यरत युवा", "jsik.jharkhand.gov.in"),
        ("मरांग गोमके जयपाल सिंह मुंडा विदेशी छात्रवृत्ति", "UK व आयरलैंड के शीर्ष विश्वविद्यालयों में 100% निशुल्क उच्च शिक्षा", "ST, SC, OBC एवं अल्पसंख्यक समुदाय के मेधावी छात्र", "mgos.jharkhand.gov.in")
    ]
    story.extend(create_category_table("4. युवा, शिक्षा एवं रोजगार (Youth, Education & Employment)", cat4))

    story.append(PageBreak())

    # 5. Social Security & Pensions
    cat5 = [
        ("सर्वजन वृद्धावस्था पेंशन योजना", "₹1,000 प्रति माह सीधे बैंक खाते में (आजीवन)", "सामान्य वर्ग: 60+ वर्ष | ST/SC वर्ग: 50+ वर्ष", "jharsewa.jharkhand.gov.in"),
        ("सर्वजन विधवा / एकल नारी पेंशन", "₹1,000 प्रति माह सामाजिक सुरक्षा पेंशन", "18 वर्ष या अधिक आयु की विधवा, परित्यक्ता या निराश्रित महिलाएं", "jharsewa.jharkhand.gov.in"),
        ("सर्वजन दिव्यांग पेंशन योजना", "₹1,000 प्रति माह पेंशन सहायता", "40% या अधिक दिव्यांगता प्रमाण पत्र धारक नागरिक", "swd.jharkhand.gov.in"),
        ("स्वामी विवेकानंद नि:शक्त स्वावलंबन", "दिव्यांगजनों को उपकरण, ट्राईसाइकिल व स्वरोजगार अनुदान", "राज्य के प्रमाणित दिव्यांग नागरिक", "swd.jharkhand.gov.in")
    ]
    story.extend(create_category_table("5. सामाजिक सुरक्षा एवं सर्वजन पेंशन (Universal Pension & Social Security)", cat5))

    # 6. Food Security & Healthcare
    cat6 = [
        ("झारखंड राज्य खाद्य सुरक्षा योजना (हरा कार्ड)", "मात्र ₹1/किलो की दर से 5 किग्रा अनाज प्रति व्यक्ति/माह", "राष्ट्रीय खाद्य सुरक्षा (NFSA) से छूटे गरीब परिवार", "aahar.jharkhand.gov.in"),
        ("सोना सोबरन धोती-साड़ी योजना", "मात्र ₹10 में धोती/लुंगी व ₹10 में साड़ी (वर्ष में 2 बार)", "अंत्योदय एवं बीपीएल राशन कार्ड धारक परिवार", "aahar.jharkhand.gov.in"),
        ("अबुआ स्वास्थ्य सुरक्षा योजना", "₹15 लाख तक का कैशलेस अस्पताल इलाज", "आयुष्मान भारत से वंचित राज्य के 33 लाख परिवार", "health.jharkhand.gov.in"),
        ("मुख्यमंत्री गंभीर बीमारी उपचार योजना", "कैंसर, किडनी, हृदय रोग के इलाज हेतु ₹10 लाख तक सरकारी अनुदान", "वार्षिक आय ₹8 लाख से कम वाले नागरिक", "health.jharkhand.gov.in")
    ]
    story.extend(create_category_table("6. खाद्य सुरक्षा एवं स्वास्थ्य कल्याण (Food & Health Security)", cat6))

    # Important Instructions Box
    instructions = [
        [Paragraph("<b>नागरिकों एवं प्रज्ञा केंद्र (CSC) संचालकों के लिए आवश्यक दिशा-निर्देश:</b><br/>"
                   "1. <b>ऑफलाइन आवेदन:</b> झारखंड की अधिकांश योजनाओं के फॉर्म 'आपकी योजना, आपकी सरकार, आपके द्वार' शिविरों में अथवा नजदीकी प्रज्ञा केंद्र / प्रखंड विकास पदाधिकारी (BDO) कार्यालय में जमा होते हैं।<br/>"
                   "2. <b>डीबीटी (DBT) सक्रियता:</b> योजना की राशि प्राप्त करने हेतु आपका बैंक खाता आधार NPCI मैपर से सक्रिय (Seeded) होना अनिवार्य है। केवल आधार लिंक होना पर्याप्त नहीं है।<br/>"
                   "3. <b>डिजिटल प्रमाण पत्र:</b> जाति, आय व आवासीय प्रमाण पत्र झारसेवा (jharsewa.jharkhand.gov.in) के माध्यम से डिजिटल रूप से बनवाएं।<br/>"
                   "4. <b>पात्रता जांचें:</b> JanLabh.in पोर्टल पर जाकर किसी भी योजना की विस्तृत पात्रता और आवश्यक प्रपत्र निशुल्क ऑनलाइन जांचें।", note_box_style)]
    ]
    t_note = Table(instructions, colWidths=[523])
    t_note.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#ecfdf5')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#10b981')),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(Spacer(1, 6))
    story.append(t_note)

    doc.build(story, canvasmaker=NumberedCanvas)
    print("Generated Jharkhand Schemes Directory PDF successfully! Size:", os.path.getsize(pdf_filename), "bytes")

if __name__ == '__main__':
    build_pdf()
