# -*- coding:utf-8 -*-
from configparser import ConfigParser
import os.path
from selenium import webdriver

 
class BrowserEngine(object):
 
    def __init__(self, driver):
        self.driver = driver
 

    def open_browser(self, browser):
 
 
        if browser == "Firefox":
            driver = webdriver.Firefox()
        elif browser == "Chrome":
            driver = webdriver.Chrome()
        elif browser == "IE":
            driver = webdriver.Ie()
 
        driver.get('http://www.baidu.com')
        driver.maximize_window()
        driver.implicitly_wait(10)
        return driver
 
    def quit_browser(self):
        self.driver.quit()