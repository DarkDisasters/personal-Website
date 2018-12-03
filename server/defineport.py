#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-19 15:53:56
# @Last Modified by:   anchen
# @Last Modified time: 2018-11-19 16:14:43
from tornado.options import define,options

define("port", default=4000, help="run on the given port", type=int)