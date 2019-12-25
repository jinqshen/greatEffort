package com.example.demo.utils;

import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Iterator;

import net.sf.json.JSONObject;

public class BaiduSmsUtils {

	public static final String baiduSmsUrl = "https://rd-reach-service.duxiaoman.com/api/notification/v1/sendSms";
	
	public static JSONObject sendNoteByBaidu(String appId, String appKey, String phoneNumber, String smsContent) {
		JSONObject obj = new JSONObject();
		String contentTmp = "{'tpl_id':'network_anomaly_alarm','params':{'content':'" + smsContent + "'}}";
		obj.put("content", contentTmp);
		obj.put("sms_type", 4);
		obj.put("content_type", 2);
		obj.put("dest_type", 2);
		obj.put("dest", phoneNumber);
		Long timestamp = new Date().getTime()/1000;
		obj.put("_sign", getSign(obj, appId, appKey, timestamp));
		obj.put("_timestamp", timestamp);
		obj.put("_appid", appId);
		JSONObject resJson = HttpClientUtils.doPoststr(baiduSmsUrl, http_build_query(obj));
		return resJson;
	}
	
	/**
	 * 获取签名
	 * @param obj
	 * @param appId
	 * @param appKey
	 * @param timestamp
	 * @return
	 */
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
		sign += "." + appId + "." + timestamp + "." + appKey;
		System.out.println(sign);
		sign = SHA1Utils.encode(sign);
		return sign.toLowerCase();
	}
	
	/**
	 * 实现php的http_build_query方法
	 * @param jsonObject
	 * @return
	 */
	private static String http_build_query(JSONObject jsonObject) {
		String str = "";
		Iterator iterator = jsonObject.keys();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			str += key + "=" + jsonObject.get(key) + "&";
		}
		str = str.substring(0, str.length() - 1);
		try {
			str = URLEncoder.encode(str, "utf-8");
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		str = str.replace("%3D", "=").replace("%26", "&");
		return str;
	}
}
