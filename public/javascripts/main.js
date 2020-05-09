$(document).ready(function () {

  $('.topic_content a,.reply_content a').attr('target', '_blank');

  // pretty code
  prettyPrint();

  // data-loading-text="提交中"
  $('.submit_btn').click(function () {
    $(this).button('loading');
  });

  // 广告的统计信息
  $('.sponsor_outlink').click(function () {
    var $this = $(this);
    var label = $this.data('label');
    ga('send', 'event', 'banner', 'click', label, 1.00, {'nonInteraction': 1});
	});

	String.prototype.format = function() {
		var str = this.toString();
		if (!arguments.length)
			return str;
		var args = typeof arguments[0];
		args = (("string" == args || "number" == args) ? arguments : arguments[0]);
		for (var arg in args) {
			var replace = args[arg] || '';
			str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), replace);
		}
		return str;
	};

	window.escapeSignature = function (signature) {
		return signature.split('\n').map(function (p) {
			return _.escape(p);
		}).join('<br>');
	};

	window.loadScript = function loadScript(url, callback){
		const script = document.createElement('script');
    script.id = url;
    script.src = url;
    script.onload = script.onreadystatechange = function() {
      if (script.ready) {
          return false;
      }
      if (!script.readyState //这是FF的判断语句，因为ff下没有readyState这个值，IE的readyState肯定有值
					|| script.readyState == "loaded"
					|| script.readyState == 'complete' // 这是IE的判断语句
      ) {
          // console.log("INFO:load:" + url);
          script.ready = true;
          callback();
      }
    };
    document.body.appendChild(script);
	}

	window.syncLoadScripts = function(urls, callback){
		if(!Array.isArray(urls)) throw new Error("scripts must be an array!")
		let ok = 0;
		const loadScriptFunc = function(url) {
			window.loadScript(url, function(){
					ok++;
					if (ok == urls.length) {
							callback();
					} else {
						loadScriptFunc(urls[ok])
					}
			})
		}
		loadScriptFunc(urls[0]);
	}

});
