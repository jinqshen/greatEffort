package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.utils.BaiduSmsUtils;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
		String appId = "fsg_bpit_lvzhou";
		String appKey = "aqMqaQo2cvQcpRTg";
		String phoneNumber = "15183345760";
		String smsContent = "测试短信呀";
		int code = BaiduSmsUtils.sendNoteByBaidu(appId, appKey, phoneNumber, smsContent);
		System.out.println(code);
	}

}
