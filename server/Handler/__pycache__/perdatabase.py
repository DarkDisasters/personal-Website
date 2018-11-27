import pymongo
from pymongo import MongoClient

import os
from os.path import basename

dbIP = "localhost"

class PERDATABASE:

	def connectDB(self, dbname, dbip, port):
		self._conn = MongoClinet(dbip,port)
		self._db = self._conn[dbname]
		collectionname = "test"
		self._collection = self.db[collectionname]

	def saveUserInfo(self, userInfo):
		record = self._collection.find_one("name": userInfo["name"])
		print("record", record)
		if(record != None):
			print("record exist")
			passwd = userInfo["password"]
			self._collection.update_one({"name": userInfo["name"]},{"$set": {"password": passwd}})
		else:
			self._collection.insert_one(userInfo)
		print("save ok")
