#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-19 16:01:07
# @Last Modified by:   anchen
# @Last Modified time: 2018-12-04 11:09:36
import sys          #utf-8,兼容汉字

from handler.indexHandler import IndexHandler 
from handler.dbHandler import SaveUserHandler
from handler.dbHandler import QueryUserHandler

url = [
    (r"/",IndexHandler),
    (r"/saveInfo",SaveUserHandler),
    (r"/queryInfo", QueryUserHandler),

]