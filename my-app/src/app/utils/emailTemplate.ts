import { theme } from '../styles/theme';

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const generateEmailTemplate = (data: EmailData): string => {
  const { name, email, phone, message } = data;
  
  // Premium color scheme
  const colors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    background: '#FFFFFF',
    text: '#2C2C2C',
    border: '#E0D5C6',
    accent: '#B8997D',
    gold: '#C4A484'
  };
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Message from ${name}</title>
      <style>
        body {
          font-family: 'Playfair Display', Georgia, serif;
          line-height: 1.6;
          color: ${colors.text};
          margin: 0;
          padding: 0;
          background-color: #F5F0EB;
        }
        .email-container {
          max-width: 650px;
          margin: 40px auto;
          background: #FFFFFF;
          border: 1px solid ${colors.border};
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        .header {
          background: ${colors.primary};
          background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
          color: white;
          padding: 48px 32px;
          text-align: center;
          border-bottom: 3px solid ${colors.gold};
        }
        .header h1 {
          margin: 0;
          font-size: 32px;
          font-weight: 600;
          letter-spacing: 1px;
          font-family: 'Playfair Display', Georgia, serif;
        }
        .header p {
          margin: 12px 0 0;
          font-size: 16px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .content {
          padding: 48px 32px;
          background: linear-gradient(to bottom, #FFFFFF, #F9F6F3);
        }
        .field {
          margin-bottom: 32px;
          padding: 24px;
          background: #FFFFFF;
          border: 1px solid ${colors.border};
          border-left: 4px solid ${colors.primary};
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.03);
        }
        .field-label {
          font-weight: 600;
          color: ${colors.primary};
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-family: 'Inter', sans-serif;
        }
        .field-value {
          color: ${colors.text};
          font-size: 16px;
          line-height: 1.8;
        }
        .message-box {
          margin-top: 32px;
          padding: 32px;
          background: #FFFFFF;
          border: 1px solid ${colors.border};
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.03);
        }
        .message-box .field-value {
          white-space: pre-line;
          line-height: 1.8;
          font-family: 'Inter', sans-serif;
        }
        .footer {
          text-align: center;
          padding: 40px 32px;
          background: ${colors.primary};
          color: #FFFFFF;
          font-size: 14px;
          border-top: 3px solid ${colors.gold};
        }
        .highlight {
          color: ${colors.primary};
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .highlight:hover {
          color: ${colors.accent};
        }
        .timestamp {
          color: ${colors.accent};
          font-size: 14px;
          margin-top: 24px;
          font-style: italic;
          text-align: right;
        }
        .company-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }
        .company-tagline {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          letter-spacing: 0.5px;
          margin: 8px 0;
        }
        .divider {
          width: 60px;
          height: 2px;
          background: ${colors.gold};
          margin: 20px auto;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>New Inquiry</h1>
          <p>Business Communication</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">From</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Contact Information</div>
            <div class="field-value">
              <div>Email: <a href="mailto:${email}" class="highlight">${email}</a></div>
              ${phone ? `<div style="margin-top: 12px">Phone: <a href="tel:${phone}" class="highlight">${phone}</a></div>` : ''}
            </div>
          </div>
          
          <div class="message-box">
            <div class="field-label">Message</div>
            <div class="field-value">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div class="timestamp">
            Received on ${new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
        
        <div class="footer">
          <div class="company-name">Helderlig Commercio</div>
          <div class="divider"></div>
          <div class="company-tagline">Wood Import Export Business Solutions</div>
          <div style="margin-top: 20px; opacity: 0.9;">
            © ${new Date().getFullYear()} Helderlig Commercio. All rights reserved
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}; 