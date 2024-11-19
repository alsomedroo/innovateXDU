import { NextResponse } from 'next/server';
import { signin } from '../../../../../backend/controllers/userController';
import connectDB from '../../../../../backend/config/db';

connectDB();

export async function POST(request) {
  const body = await request.json();
  const res = new NextResponse();

  await signin({ body }, res);
  return res;
}
