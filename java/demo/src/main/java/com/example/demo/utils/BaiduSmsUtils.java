package com.example.demo.utils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Iterator;

import net.sf.json.JSONObject;

public class BaiduSmsUtils {

	public static final String baiduSmsUrl = "https://rd-reach-service.duxiaoman.com/api/notification/v1/sendSms";
	
	public static int sendNoteByBaidu(String appId, String appKey, String phoneNumber, String smsContent) {
		JSONObject obj = new JSONObject();
		obj.put("content", smsContent);
		obj.put("dest_type", 2);
		obj.put("dest", phoneNumber);
		Long timestamp = new Date().getTime()/1000;
		obj.put("_sign", getSign(obj, appId, appKey, timestamp));
		obj.put("_timestamp", timestamp);
		obj.put("_appid", appId);
		System.out.println(obj.toString());
		Long aLong = (long) 1572331977;
		String a = getSign(obj, appId, appKey, aLong);
		System.out.println(a);
		JSONObject resJson = HttpClientUtils.doPoststr(baiduSmsUrl, obj.toString());
		return resJson.getInt("code");
	}
	
	private static String getSign(JSONObject obj, String appId, String appKey, Long timestamp) {
		String sign = "";
		Iterator iterator = obj.keys();
		JSONObject object = new JSONObject();
		ArrayList<String> list = new ArrayList<>();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			if(key.charAt(0) != '_') {
				object.put(key, obj.get(key));
			}
		}
		list.addAll(object.keySet());
		Collections.sort(list);
		System.out.println(list);
		for (String key : list) {
			sign += key + "=" + object.get(key) + "&";
		}
		sign = sign.substring(0, sign.length() - 1);
		sign += "." + appId + "." + appKey + "." + timestamp;
		System.out.println(sign);
		sign = SHA1Utils.encode(sign);
		return sign;
	}
}
