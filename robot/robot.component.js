"use strict";var _createClass=function(){function a(b,f){for(var h,g=0;g<f.length;g++)h=f[g],h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(b,h.key,h)}return function(b,f,g){return f&&a(b.prototype,f),g&&a(b,g),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b)).next())})},core_1=require("@angular/core"),robot_logic_1=require("robot/robot.logic"),robot_util_1=require("robot/robot.util"),CommandRegEx=/((PLACE)\s+([\-\+]?\d+)\s*\,\s*([\-\+]?\d+)\s*\,\s*(NORTH|SOUTH|WEST|EAST)|MOVE|LEFT|RIGHT|REPORT)/g,RobotComponent=function(){function a(b){var f=this;_classCallCheck(this,a),this.changeDetectorRef=b,this.Commands="",this.Reports="",this.ReportLocation=function(g){console.log("report value: ",g),f.Reports+=g+"\n"},this.WaitingSpan=500,this.Simulate=function(){f.LastSimulator&&f.LastSimulator.cancel(),f.LastSimulator=f.CreateSimulator()},this.CreateSimulator=function(){return new Task(function(g,h,j){return __awaiter(f,void 0,void 0,regeneratorRuntime.mark(function l(){var m,n,o,p,q,s,t,u;return regeneratorRuntime.wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(this.InputTextArea){z.next=3;break}return console.error("Input TextArea was not intialized."),z.abrupt("return");case 3:m=this.InputTextArea.nativeElement,n=this.Robot,o=void 0,p=0,q=this.Commands.replace(/[\n\r]+/g,"\n"),s=/((PLACE)\s+([\-\+]?\d+)\s*\,\s*([\-\+]?\d+)\s*\,\s*(NORTH|SOUTH|WEST|EAST)|MOVE|LEFT|RIGHT|REPORT)/g;case 9:if(j.cancelled||!(o=s.exec(q))){z.next=34;break}if(!/^PLACE/.test(o[1])){z.next=22;break}return t={command:o[2],X:+o[3],Y:+o[4],D:o[5],index:p},m.select(),m.selectionStart=o.index,m.selectionEnd=o.index+o[0].replace(/[\n\r]+/g,"").length,n.execute(t),this.RobotStatus=n.Status,this.changeDetectorRef.detectChanges(),z.next=20,j.append(TimerUtility.Wait(this.WaitingSpan));case 20:z.next=31;break;case 22:return u={command:o[1],index:p},m.select(),m.selectionStart=o.index,m.selectionEnd=o.index+o[0].replace(/[\n\r]+/g,"").length,n.execute(u),this.RobotStatus=n.Status,this.changeDetectorRef.detectChanges(),z.next=31,j.append(TimerUtility.Wait(this.WaitingSpan));case 31:p+=1,z.next=9;break;case 34:case"end":return z.stop();}},l,this)}))})}}return _createClass(a,[{key:"UseExample",value:function(f){"A"===f?this.Commands="PLACE 0,0,NORTH\nMOVE\nREPORT\n":"B"===f?this.Commands="PLACE 0,0,NORTH\nLEFT\nREPORT\n":"C"===f?this.Commands="PLACE 1,2,EAST\nMOVE\nMOVE\nLEFT\nMOVE\nREPORT\n":void 0}},{key:"onFileChanged",value:function(f){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function g(){var h;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(f&&0<f.length)){l.next=5;break}return h=f.item(0),l.next=4,FileUtility.ReadString(h);case 4:this.Commands=l.sent;case 5:case"end":return l.stop();}},g,this)}))}},{key:"Execute",value:function(){for(var g,f=this.Robot,h=0;g=CommandRegEx.exec(this.Commands);){if(/^PLACE/.test(g[1])){var j={command:g[2],X:+g[3],Y:+g[4],D:g[5],index:h};f.execute(j)}else{var l={command:g[1],index:h};f.execute(l)}h+=1}this.RobotStatus=f.Status}},{key:"RandomCommands",value:function(){switch(Math.floor(5*Math.random())){case 0:this.Commands+="PLACE "+Math.floor(8*Math.random()-3)+","+Math.floor(8*Math.random()-3)+","+["NORTH","SOUTH","WEST","EAST"][Math.floor(4*Math.random())]+"\n";break;case 1:this.Commands+="MOVE\n";break;case 2:this.Commands+="LEFT\n";break;case 3:this.Commands+="RIGHT\n";break;case 4:this.Commands+="REPORT\n";}}},{key:"Robot",get:function(){var f=new robot_logic_1.Robot,g=new robot_util_1.Table;return g.minX=0,g.minY=0,g.maxX=4,g.maxY=4,f.Region=g,f.Reporter=this.ReportLocation,this.Reports="",f}}]),a}();__decorate([core_1.ViewChild("input"),__metadata("design:type",core_1.ElementRef)],RobotComponent.prototype,"InputTextArea",void 0),RobotComponent=__decorate([core_1.Component({selector:"[robot]",template:"<div class=\"component\"> <div class=\"title\"> Genie Robot Test </div> <div class=\"buttons\"> <div file-button class=\"btn\" [Accept]=\"'.txt'\" [Multiple]=\"false\" (FileChanged)=\"onFileChanged($event)\" title=\"Load *.txt command file.\">Load File</div> <div class=\"btn\" (click)=\"Execute()\" title=\"Execute the commands\">Execute</div> <div class=\"btn\" (click)=\"Simulate()\" title=\"Simulate the robot movement process\">Simulate</div> <div class=\"btn\" (click)=\"RandomCommands()\" title=\"Generate a random command\">Random</div> </div> <div class=\"examples\"> <div class=\"link\" (click)=\"UseExample('A')\" title=\"Use Example A\">Example A</div> <div class=\"link\" (click)=\"UseExample('B')\" title=\"Use Example A\">Example B</div> <div class=\"link\" (click)=\"UseExample('C')\" title=\"Use Example A\">Example C</div> </div> <div class=\"input\"> <textarea #input placeholder=\"Commands for Robot\" [(ngModel)]=\"Commands\"></textarea> </div> <div class=\"output\"> <textarea placeholder=\"Reports of Status\" readonly=\"readonly\" [(ngModel)]=\"Reports\"></textarea> </div> <div class=\"status\"> <div>Output:</div> <div class=\"result\">{{RobotStatus}}</div> </div> <div robot-map [Status]=\"RobotStatus\"> </div> </div>"}),__metadata("design:paramtypes",[core_1.ChangeDetectorRef])],RobotComponent),exports.RobotComponent=RobotComponent;var Task=function(){function a(b){var f=this;_classCallCheck(this,a),this.cancel=function(){f._status="cancelled",f.children.forEach(function(g){return g.cancel()})},this.children=[],this.resolve=function(g){"cancelled"==f._status||(f._status="resolved",f.onfulfilled&&f.onfulfilled(g))},this.reject=function(g){"cancelled"==f._status||(f._status="rejected",f.onrejected&&f.onfulfilled(g))},this._status="pending",b&&b(this.resolve,this.reject,this)}return _createClass(a,[{key:"append",value:function(f){return this.children.push(f),f}},{key:"then",value:function(){this.onfulfilled=0>=arguments.length?void 0:arguments[0],this.onrejected=1>=arguments.length?void 0:arguments[1]}},{key:"catch",value:function(){this.onrejected=0>=arguments.length?void 0:arguments[0]}},{key:"status",get:function(){return this._status}},{key:"cancelled",get:function(){return"cancelled"==this._status}},{key:"[Symbol.toStringTag]",get:function(){return"Task"}}]),a}(),RobotMap=RobotMap_1=function(){function a(b){_classCallCheck(this,a),this.element=b,this._size=5,this.GridColor="black",this.RobotColor="blue",this.viewBoxSize=120}return _createClass(a,[{key:"Hide",value:function(){StyleUtility.setStyle(RobotMap_1.StyleID,"div[robot-map]>div#div-robot{display: none;}")}},{key:"ngAfterContentInit",value:function(){this.ApplySVG(),this.Hide()}},{key:"ApplySVG",value:function(){this.element.nativeElement;this.unitSize=this.viewBoxSize/this._size;for(var j,g=[],h=0;h<=this._size;h++)j=h/this._size*this.viewBoxSize,g.push("<line y1=\"0\" y2=\""+this.viewBoxSize+"\" x1=\""+j+"\" x2=\""+j+"\" stroke=\""+this.GridColor+"\"></line>"),g.push("<line x1=\"0\" x2=\""+this.viewBoxSize+"\" y1=\""+j+"\" y2=\""+j+"\" stroke=\""+this.GridColor+"\"></line>");var l=this.svg.nativeElement;l.setAttribute("viewBox","0 0 "+this.viewBoxSize+" "+this.viewBoxSize),l.innerHTML=g.join("")}},{key:"Size",set:function(f){"number"==typeof f&&Number.isFinite(f)&&1<f&&(this._size=Math.round(f))}},{key:"Status",set:function(f){var g=/(\d+),(\d+),(\w+)/g.exec(f);if(g){var h=100/this._size,j=Math.round(100*(+g[1]/this._size)),l=Math.round(100*(1-+g[2]/this._size))-h;switch(g[3]){case"NORTH":StyleUtility.setStyle(RobotMap_1.StyleID,"div[robot-map]>div#div-robot{width: "+h+"%; height: "+h+"%; left:"+j+"%; top: "+l+"%; transform: rotate(0deg);}");break;case"SOUTH":StyleUtility.setStyle(RobotMap_1.StyleID,"div[robot-map]>div#div-robot{width: "+h+"%; height: "+h+"%; left:"+j+"%; top: "+l+"%; transform: rotate(180deg);}");break;case"EAST":StyleUtility.setStyle(RobotMap_1.StyleID,"div[robot-map]>div#div-robot{width: "+h+"%; height: "+h+"%; left:"+j+"%; top: "+l+"%; transform: rotate(90deg);}");break;case"WEST":StyleUtility.setStyle(RobotMap_1.StyleID,"div[robot-map]>div#div-robot{width: "+h+"%; height: "+h+"%; left:"+j+"%; top: "+l+"%; transform: rotate(270deg);}");}}}}]),a}();RobotMap.StyleID="robot-map-style",__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],RobotMap.prototype,"Size",null),__decorate([core_1.Input(),__metadata("design:type",String)],RobotMap.prototype,"GridColor",void 0),__decorate([core_1.Input(),__metadata("design:type",String)],RobotMap.prototype,"RobotColor",void 0),__decorate([core_1.ViewChild("svg"),__metadata("design:type",core_1.ElementRef)],RobotMap.prototype,"svg",void 0),__decorate([core_1.Input(),__metadata("design:type",String),__metadata("design:paramtypes",[String])],RobotMap.prototype,"Status",null),RobotMap=RobotMap_1=__decorate([core_1.Component({selector:"[robot-map]",template:"<svg #svg></svg><div id=\"div-robot\"></div>"}),__metadata("design:paramtypes",[core_1.ElementRef])],RobotMap),exports.RobotMap=RobotMap;var FileButton=FileButton_1=function(){function a(){var b=this;_classCallCheck(this,a),this.onFileChange=function(){var g=b.file.nativeElement.files;void 0===g||0==g.length||b.FileChanged.emit(g)},this.Multiple=!1,this.Processing=!1,this.clearFile=function(){b.file.nativeElement.value=""},this.FileChanged=new core_1.EventEmitter,FileButton_1.injectStyle()}return _createClass(a,null,[{key:"injectStyle",value:function(){FileButton_1.injected||StyleUtility.setStyle("file-button","div[file-button] {position:relative; overflow:hidden; user-select: none; cursor: pointer;}\ndiv[file-button]>div.file-button-content{display: block;}")}}]),a}();FileButton.injected=!1,__decorate([core_1.Input(),__metadata("design:type",String)],FileButton.prototype,"Accept",void 0),__decorate([core_1.ViewChild("file"),__metadata("design:type",core_1.ElementRef)],FileButton.prototype,"file",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],FileButton.prototype,"Multiple",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],FileButton.prototype,"Processing",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],FileButton.prototype,"FileChanged",void 0),FileButton=FileButton_1=__decorate([core_1.Component({selector:"[file-button]",template:"<input #file (mousedown)=\"clearFile();\" [style.width]=\"Processing?'0px':'2160px'\" [style.height]=\"Processing?'0px':'1600px'\" style=\"left:-100px; top: 0px; position: absolute; opacity:0; cursor: pointer;\"\n type=\"file\" [accept]=\"Accept\" (change)=\"onFileChange($event)\" [multiple]=\"Multiple\"/>\n<div class=\"file-button-content\"><ng-content></ng-content></div>"}),__metadata("design:paramtypes",[])],FileButton),exports.FileButton=FileButton;var StyleUtility=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"setStyle",value:function(f,g){for(var h=a.findStyle(f);h.hasChildNodes();)h.removeChild(h.firstChild);h.appendChild(document.createTextNode(g))}},{key:"findStyle",value:function(f){var g=document.getElementById(f);return g||(g=document.createElement("style"),g.id=f,g.type="text/css"),a.head.appendChild(g),g}},{key:"head",get:function(){return document.head||document.getElementsByTagName("head")[0]}}]),a}(),FileUtility=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"ReadString",value:function(f){return new Promise(function(g,h){var j=new FileReader;j.onerror=function(l){h(l.error)},j.onload=function(){g(j.result)},j.readAsText(f)})}}]),a}(),TimerUtility=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"Wait",value:function(f){return new Task(function(g,h,j){setTimeout(function(){j&&j.cancelled||g(!0)},f)})}}]),a}(),RobotMap_1,FileButton_1;