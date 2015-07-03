from selenium import webdriver
import os

browser = webdriver.PhantomJS()

BASE_URL = os.getenv('SELENIUM_URL', 'http://localhost:8080/')

browser.get(BASE_URL)
assert 'Palles Gavebod' in browser.title

browser.quit()
