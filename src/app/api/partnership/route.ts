import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate fields
    const { companyName, contactPerson, email, phone, businessType, message } = body;
    
    if (!companyName || !contactPerson || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real application, this would integrate with a CRM (HubSpot, Salesforce)
    // or send an email via SendGrid/Resend.
    // For now, we simulate a successful integration.
    
    console.log('[LEAD SUBMISSION]', { companyName, contactPerson, email, phone, businessType, message });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Partnership request submitted successfully. Our team will contact you shortly.' 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
