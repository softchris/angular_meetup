

angular.module('restify', [])
	.factory('$rest', function ($http) {
	function $rest(url, actions) {
		var me = this;
		me.get = function (obj) {
			var getUrl = url + "/:id";

			if (obj !== undefined && obj.id !== undefined) {
				getUrl = getUrl.replace(':id', obj.id);
			} else {
				getUrl = getUrl.replace(':id', '');
			}

			return $http.get(getUrl).then(function (result) {
				return result.data;
			});
		};

		me.save = function (obj) {
			return $http.post(url, obj).then(function (result) {
				return result.data;
			});
		};

		me.update = function (obj) {
			return $http.put(url, obj).then(function (result) {
				return result.data;
			});
		};

		me.remove = function (obj) {
			var deleteUrl = url + "/:id";
			deleteUrl = url.replace(':id', obj.id);
			return $http.delete(deleteUrl);
		};

		if (actions !== undefined) {
			for (var action in actions) {
				me[action] = function (obj) {
					var actionObj = actions[action];

					var customUrl = actionObj.url;
					if (actionObj.replaceParams.length > 0) {
						for (var i = 0; i < actionObj.replaceParams.length; i++) {
							customUrl = customUrl.replace(":" + actionObj.replaceParams[i], obj[actionObj.replaceParams[i]]);
						}
					}

					return $http({ method: actionObj.method, url: customUrl }).then(function (result) {
						var data = result.data;
						if (actionObj.transformResponse !== undefined) {
							data = actionObj.transformResponse(data);
						}
						return data;
					});
				};
			}
		}
	}

	return $rest;
});