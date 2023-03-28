import crypto from 'crypto';
export enum TeamEnum {Home, Enemy}
export enum Color {Red, Gold, Black, White}
export enum ColorSelection {RedGold, BlackWhite}
// export function genUID(){return typeof window !== 'undefined' ? window.crypto.randomUUID() : crypto.randomUUID()}
export function genUID(){return crypto.randomUUID()}