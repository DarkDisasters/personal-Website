import pymongo
from pymongo import MongoClient

import os
from os.path import basename

dbIP = "localhost"

class PERDATABASE:

	def connectDB(self, dbname, dbip, port):
		self._conn = MongoClient(dbip,port)
		self._db = self._conn[dbname]
		collectionname = "test"
		self._collection = self._db[collectionname]

	def saveUserInfo(self, userInfo):
		record = self._collection.find_one({"username": userInfo["username"]})
		print("record", record)
		if(record != None):
			print("record exist")
			passwd = userInfo["password"]
			self._collection.update_one({"username": userInfo["username"]},{"$set": {"password": passwd}})
		else:
			self._collection.insert_one(userInfo)
		print("save ok")

	def queryUserInfo(self, username):
		print("perdatabaseusername",username) ;
		queryRecord = self._collection.find_one({"name": username}) ; 
		print("queryRecord", queryRecord)
		return queryRecord ;
