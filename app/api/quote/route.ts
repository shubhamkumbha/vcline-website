import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.fullName || !data.phone || !data.businessName) {
      return NextResponse.json(
        { error: 'Missing mandatory fields' },
        { status: 400 }
      );
    }

    // Replace with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8bnE3seUcTW2K4obbizR1r1VAoom2XLdgBoSKNDOTjrWbvINKt4Do4MdHxY_jT60Rsg/exec';

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('Failed to append lead to Google Sheet');
    }

    return NextResponse.json(
      { success: true, message: 'Lead recorded in Google Sheets' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}