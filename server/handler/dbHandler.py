#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-28 11:14:05
# @Last Modified by:   anchen
# @Last Modified time: 2018-11-28 11:25:45

import tornado.web
from tornado.options import options

import pymongo

ssDB = PERDATABASE() ;
ssDB.connectDB("personWebsite","localhost",27017)

class SaveUserInfo(tornado.web.RequestHandler):
    def post(self):
        print("save start") ;
        userInfo_name = self.get_argument("username") ;
        userInfo_password = self.get_argument("password")
        ssDB.saveUserInfo({
            "username": userInfo_name,
            "password": userInfo_password
        }) ;

        self.set_header("Access-Control-Allow-Origin","*")
        self.write({"save": "ok"})