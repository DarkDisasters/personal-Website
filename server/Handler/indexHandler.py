#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-19 16:15:53
# @Last Modified by:   anchen
# @Last Modified time: 2018-11-19 16:32:32
import tornado.web
from tornado.options import options

import setting

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        greeting = self.get_argument("greeting","hello")
        self.write(greeting + ", welcome you to read: www.itdiffer.com")