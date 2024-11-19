import { NextResponse } from 'next/server';
import { signup } from '../../../../../backend/controllers/userController';
import connectDB from '../../../../../backend/config/db';

connectDB();

export async function POST(request) {
  const body = await request.json();
  const res = new NextResponse();

  await signup({ body }, res);
  return res;
}
