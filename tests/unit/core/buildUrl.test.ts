import { describe, it, expect } from 'vitest';
import { buildUrl } from '../../../src/core/buildUrl';

describe('buildUrl', () => {
  describe('no params', () => {
    it('returns base unchanged when searchParams is omitted', () => {
      expect(buildUrl('https://api.trello.com/1/boards/123')).toBe('https://api.trello.com/1/boards/123');
    });

    it('returns base unchanged when searchParams is empty object', () => {
      expect(buildUrl('/boards/123', {})).toBe('/boards/123');
    });

    it('returns base unchanged when all values are null or undefined', () => {
      expect(buildUrl('/boards/123', { a: undefined, b: null })).toBe('/boards/123');
    });
  });

  describe('single param', () => {
    it('appends a string param with ?', () => {
      expect(buildUrl('/boards/123', { fields: 'name' })).toBe('/boards/123?fields=name');
    });

    it('appends a number param', () => {
      expect(buildUrl('/cards', { limit: 10 })).toBe('/cards?limit=10');
    });

    it('appends boolean true', () => {
      expect(buildUrl('/cards', { closed: true })).toBe('/cards?closed=true');
    });

    it('appends boolean false (falsy but not null/undefined)', () => {
      expect(buildUrl('/cards', { closed: false })).toBe('/cards?closed=false');
    });

    it('appends number 0 (falsy but not null/undefined)', () => {
      expect(buildUrl('/cards', { limit: 0 })).toBe('/cards?limit=0');
    });

    it('appends empty string value', () => {
      expect(buildUrl('/cards', { filter: '' })).toBe('/cards?filter=');
    });
  });

  describe('multiple params', () => {
    it('appends all non-null params', () => {
      const url = buildUrl('/cards', { limit: 10, filter: 'open' });
      expect(url).toContain('limit=10');
      expect(url).toContain('filter=open');
      expect(url.startsWith('/cards?')).toBe(true);
    });

    it('skips undefined values while keeping others', () => {
      const url = buildUrl('/cards', { limit: 10, filter: undefined });
      expect(url).toContain('limit=10');
      expect(url).not.toContain('filter');
    });

    it('skips null values while keeping others', () => {
      const url = buildUrl('/cards', { limit: 10, filter: null });
      expect(url).toContain('limit=10');
      expect(url).not.toContain('filter');
    });
  });

  describe('existing query string', () => {
    it('appends with & when base already contains ?', () => {
      expect(buildUrl('/cards?existing=1', { extra: '2' })).toBe('/cards?existing=1&extra=2');
    });

    it('returns base unchanged when all new params are undefined', () => {
      expect(buildUrl('/cards?existing=1', { extra: undefined })).toBe('/cards?existing=1');
    });
  });

  describe('value encoding', () => {
    it('percent-encodes special characters', () => {
      const url = buildUrl('/cards', { name: 'hello world' });
      expect(url).toContain('name=hello+world');
    });
  });
});
