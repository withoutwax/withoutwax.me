import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  'use server';
  try {
    console.log('Revalidating /');
    await revalidatePath('/');
    return NextResponse.json({ message: 'Revalidation successful' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Revalidation failed', error: err }, { status: 500 });
  }
}
