#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-28 11:14:05
# @Last Modified by:   anchen
# @Last Modified time: 2018-11-29 21:35:35

import tornado.web
from tornado.options import options

import pymongo

from handler.perdatabase import PERDATABASE

ssDB = PERDATABASE() ;
ssDB.connectDB("personWebsite","localhost",27017)

class SaveUserHandler(tornado.web.RequestHandler):
    def post(self):
        print("save start") ;
        userInfo_name = self.get_argument("username") ;
        userInfo_password = self.get_argument("password")
        print(userInfo_name)
        print(userInfo_password)
        ssDB.saveUserInfo({
            "username": userInfo_name,
            "password": userInfo_password
        }) ;

        self.set_header("Access-Control-Allow-Origin","*")
        self.write({"save": "ok"})