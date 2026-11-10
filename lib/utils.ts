import { portfolio } from '@/data/portfolio';

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const personalData = portfolio;
