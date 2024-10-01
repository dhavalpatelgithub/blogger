'use server'

import path from "path";
import { promises as fs } from 'fs';
import { cache } from "react";
import { notFound } from "next/navigation";

export const getBlogs = async (lang: string | null = 'en') => {
    try {
      const file = await fs.readFile(path.join(process.cwd(), `/data/blogs_${lang}.json`), 'utf8');
      const data = JSON.parse(file);
      if (data) {
        return data;
      }
      return null;
    } catch (e) {
      console.log(e);
      notFound();
    }  
};

export const getBlog = cache(async (lang: string, id: string) => {
  try {
    const file = await fs.readFile(path.join(process.cwd(), `/data/${id}/${id}_${lang}.json`), 'utf8');
    const data = JSON.parse(file);
    if (data) {
      return data;
    }
    return null;
  } catch (e) {
    console.log(e);
    notFound();
  }   
});