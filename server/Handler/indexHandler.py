#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-19 16:15:53
# @Last Modified by:   anchen
# @Last Modified time: 2018-12-21 21:39:11
import tornado.web
from tornado.options import options
import url 

import defineport

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")
    def post(self):
        print("okk")
        self.redirect("./loadmainblog")


class LoadMainBlogHandler(tornado.web.RequestHandler):
    def get(self):
        # print("ok1")
        self.render("./mainblog.html")
        print("ok2")
