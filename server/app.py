#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-19 15:53:39
# @Last Modified by:   anchen
# @Last Modified time: 2018-12-17 17:29:50
from url import url
import tornado.web
import os

setting = dict(
    lang_path = os.path.join(os.path.dirname(__file__), '../locales'),
    template_path = os.path.join(os.path.dirname(__file__),"../templates/"),
    static_path = os.path.join(os.path.dirname(__file__),"../static/")
)


application = tornado.web.Application(
    handlers = url,
    debug = True,
    **setting,

)
