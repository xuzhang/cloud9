// THIS FILE IS AUTOMATICALLY GENERATED BY: packed_helper.js

({
	optimize: "none",
	baseUrl: "../",
	paths: {
	"core" : "empty:",
	"ext" : "empty:",
	"apf" : "empty:",
	"treehugger" : "empty:"
	},
	include: ["build/src/core.packed", 'plugins-client/ext.filesystem/filesystem',
	'plugins-client/ext.settings/settings',
	'plugins-client/ext.editors/editors',
	'plugins-client/ext.themes/themes',
	'plugins-client/ext.themes_default/themes_default',
	'plugins-client/ext.panels/panels',
	'plugins-client/ext.dockpanel/dockpanel',
	'plugins-client/ext.openfiles/openfiles',
	'plugins-client/ext.tree/tree',
	'plugins-client/ext.save/save',
	'plugins-client/ext.recentfiles/recentfiles',
	'plugins-client/ext.gotofile/gotofile',
	'plugins-client/ext.newresource/newresource',
	'plugins-client/ext.undo/undo',
	'plugins-client/ext.clipboard/clipboard',
	'plugins-client/ext.searchinfiles/searchinfiles',
	'plugins-client/ext.searchreplace/searchreplace',
	'plugins-client/ext.quickwatch/quickwatch',
	'plugins-client/ext.quicksearch/quicksearch',
	'plugins-client/ext.gotoline/gotoline',
	'plugins-client/ext.preview/preview',
	'plugins-client/ext.log/log',
	'plugins-client/ext.help/help',
	'plugins-client/ext.code/code',
	'plugins-client/ext.statusbar/statusbar',
	'plugins-client/ext.imgview/imgview',
	'plugins-client/ext.extmgr/extmgr',
	'plugins-client/ext.runpanel/runpanel',
	'plugins-client/ext.debugger/debugger',
	'plugins-client/ext.noderunner/noderunner',
	'plugins-client/ext.console/console',
	'plugins-client/ext.consolehints/consolehints',
	'plugins-client/ext.tabbehaviors/tabbehaviors',
	'plugins-client/ext.tabsessions/tabsessions',
	'plugins-client/ext.keybindings_default/keybindings_default',
	'plugins-client/ext.watcher/watcher',
	'plugins-client/ext.dragdrop/dragdrop',
	'plugins-client/ext.menus/menus',
	'plugins-client/ext.tooltip/tooltip',
	'plugins-client/ext.sidebar/sidebar',
	'plugins-client/ext.filelist/filelist',
	'plugins-client/ext.beautify/beautify',
	'plugins-client/ext.offline/offline',
	'plugins-client/ext.stripws/stripws',
	'plugins-client/ext.testpanel/testpanel',
	'plugins-client/ext.nodeunit/nodeunit',
	'plugins-client/ext.zen/zen',
	'plugins-client/ext.codecomplete/codecomplete',
	'plugins-client/ext.vim/vim',
	'plugins-client/ext.guidedtour/guidedtour',
	'plugins-client/ext.quickstart/quickstart',
	'plugins-client/ext.jslanguage/jslanguage',
	'plugins-client/ext.tabsessions/tabsessions',
	'plugins-client/ext.closeconfirmation/closeconfirmation',
	'plugins-client/ext.codetools/codetools',
	'plugins-client/ext.colorpicker/colorpicker',
	'plugins-client/ext.revisions/revisions',
	'plugins-client/ext.language/language'], 
	out: "../plugins-client/ext.packed/packed.js",
	inlineText: true,
	findNestedDependencies: true,
	optimizeAllPluginResources: false,
	useStrict: true,
	wrap: true,
	onBuildRead: function (moduleName, path, contents) {
		var textRegExp = new RegExp(/text!ext\/(\w+)\//g);
		var match;
		if ( (match = contents.match(textRegExp) ) ) {
		        for (var m in match) {
		                var name = match[m].split("/")[1];
		                var path = "text!plugins-client/ext." + name + "/";
		                contents = contents.replace(match[m], path);
		        }
		}

		return contents;
	}
})