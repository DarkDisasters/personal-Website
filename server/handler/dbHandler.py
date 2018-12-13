#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-28 11:14:05
# @Last Modified by:   anchen
# @Last Modified time: 2018-12-04 14:59:15

import tornado.web
from tornado.options import options

import pymongo

from handler.perdatabase import PERDATABASE

ssDB = PERDATABASE() ;
ssDB.connectDB("personWebsite","localhost",27017)

class SaveUserHandler(tornado.web.RequestHandler):
    def post(self):
        print("save start") ;
        userInfo_name = self.get_argument("name") ;
        userInfo_password = self.get_argument("password")
        print(userInfo_name)
        print(userInfo_password)
        ssDB.saveUserInfo({
            "username": userInfo_name,
            "password": userInfo_password
        }) ;

        self.set_header("Access-Control-Allow-Origin","*")
        self.write({"save": "ok"})

class QueryUserHandler(tornado.web.RequestHandler):
    def post(self):
        print("query start") ;
        name = self.get_argument("name") ;
        print("dbHandlername",name) ;
        userInfo = ssDB.queryUserInfo(name) ;

        self.set_header("Access-Control-Allow-Origin", "*") ;
        self.write({"name": userInfo["username"], "password": userInfo["password"]});