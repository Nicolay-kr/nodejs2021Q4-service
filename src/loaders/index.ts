import { Application } from 'express';
import { postgresLoader } from './postgres';

export const loadersInit = async ({ expressApp }: { expressApp: Application }) => {
  await postgresLoader();

  const { expressLoader } = await import('./express');
  await expressLoader({ app: expressApp});
}