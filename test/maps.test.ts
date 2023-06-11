import { afterAll, beforeAll, describe, test } from 'vitest'
import { preview } from 'vite'
import { chromium } from 'playwright'
import type { Browser, Page } from 'playwright'
import { expect } from '@playwright/test'

describe('basic', async () => {
  let server: any
  let browser: Browser
  let page: Page

  // Use Vite to startup a server
  // In this case the built app from /dist
  beforeAll(async () => {
    server = await preview({ 
      preview: { port: 3001 },
    })
    browser = await chromium.launch()
    page = await browser.newPage()
  })

  // Shutdown the Vite server when done
  afterAll(async () => {
    await browser.close()
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close(error => error ? reject(error) : resolve())
    })
  })

  test('Basic Map Tests', async () => {
    await page.goto('http://localhost:3001')
    const mapCenter = await page.evaluate(() => {
      return document.myMappyMap.getCenter()
    });
    await expect(mapCenter).toEqual({
      lat: 0,
      lng: 0
    })

    const eventPoint = page.evaluate(() => {
      return new Promise((resolve) => {
        document.myMappyMap.once('click', (e) => {
          console.log(`A click event has occurred at ${e.lngLat}`);
          resolve(e.point)
        });
      })
    });
    await page.mouse.click(10 ,10)
    await new Promise(r => setTimeout(r, 1000));

    console.log(eventPoint)
  })


})
