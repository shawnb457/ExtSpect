Ext.application({
        name : 'ExtSpectSolo',
        requires : [ 'extspect.ExtSpect' ],
        launch : function() {
	        Ext.Viewport.add(Ext.create('extspect.ExtSpect', {
		        app : ExtSpectSolo.app,
	        }));
        }
});
