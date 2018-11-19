#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: anchen
# @Date:   2018-11-19 15:43:08
# @Last Modified by:   anchen
# @Last Modified time: 2018-11-19 15:53:11
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from app import application
from tornado.options import options
import setting

def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(options.port)
    print("server is running at localhost:%s/" %options.port)
    tornado.ioloop.IOLoop.instance().start()

if __name__ == '__main__':
    main()