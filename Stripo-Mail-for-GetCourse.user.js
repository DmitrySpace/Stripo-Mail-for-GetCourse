// ==UserScript==
// @name         Stripo Mail for GetCourse
// @version      1.0.3
// @date         2020.03.07
// @description  Создание писем в GetCourse стало ещё проще!
// @author       Dmitry Space
// @match        *://*/notifications/control/mailings/update/id/*
// @require      https://cdn.jsdelivr.net/gh/jotform/css.js@master/css.min.js
// @grant        none
// @noframes
// ==/UserScript==

window.stripoPluginId = "8f6857f29add40cfafab84c88c1d0516";
window.stripoSecretKey = "9d4fb18eb9c74d95a2e868d8600d4e68";

(function() {
    'use strict';

  if($("#stripo_plugin_open").length > 0) return;

  $('#getAnalysis').after(
    '<a href="javascript:void(0)" id="stripo_plugin_open" class="btn btn-success" style="margin-left: 15px;"><span class="glyphicon glyphicon-tasks"></span> Открыть Stripo</a>'
  );

  $('head').append("<style>"+mainpagestyles()+"</style>");

  window.stripoCurrentLetterCode = "";
  if($("#stripo-godofblocks").length > 0) {
    window.stripoCurrentLetterCode = $('div.note-editable').html();
    $('div.note-editable').html(
        '<iframe id="stripoLetterIFrame" frameborder="0" scrolling="no" style="width:100%;"></iframe>'
    );
    $("#stripoLetterIFrame")[0].contentWindow.document.open();
    $("#stripoLetterIFrame")[0].contentWindow.document.write(window.stripoCurrentLetterCode);
    $("#stripoLetterIFrame")[0].contentWindow.document.close();
    $(".note-toolbar").css("position","relative").append(`
                <div class="note-toolbar-disabled-by-stripo"><div>
                    Редактирование этого письма возможно только в редакторе Stripo.
                </div></div>
    `);
  }

  $('body').on("click",'#stripo_plugin_open', function() {

    $('body').css("overflow","hidden").append(
        '<iframe id="stripoPluginIFrame" frameborder="0" scrolling="no" style="width:100%;"></iframe>'
    );
    var stripoPluginWindow = $("#stripoPluginIFrame")[0].contentWindow;
    stripoPluginWindow.document.open();
    stripoPluginWindow.document.write(
      '<html>'+
        '<head>'+
          '<style>'+stripopluginstyles()+'</style>'+
          '<script type="text/javascript" src="https://plugins.stripo.email/static/latest/stripo.js"></script>'+
        '</head>'+
        '<body>'+
          '<div class="stripoTable">'+
            '<div class="stripoTableBody">'+
              '<div class="stripoTableRow">'+
                '<div id="stripoSettingsContainer" class="stripoTableCell" style="width:25%;"></div>'+
                '<div id="stripoPreviewContainer" class="stripoTableCell" style="width:75%;"></div>'+
              '</div>'+
            '</div>'+
            '<div class="buttons">'+
              '<div class="loadingio-spinner-rolling-q3qw3bv5npn"><div class="ldio-zegrl3yivoa"><div></div></div></div>'+
              '<a href="javascript:void(0)" id="stripo_plugin_save" class="btn btn-success" style="margin-left: 15px">Готово</a>'+
              '<a href="javascript:void(0)" id="stripo_plugin_close" class="btn btn-default" style="margin-left: 15px">Закрыть Stripo</a>'+
            '</div>'+
            '<div class="loadingio-box"><div class="loadingio-spinner-container"><div class="loadingio-spinner-dual-ring-if7ukorwxbb"><div class="ldio-h6ewhw6puh4"><div></div><div><div></div></div></div></div></div></div>'+
          '</div>'+
        '</body>'+
      '</html>'
    );
    stripoPluginWindow.document.close();


    $("#stripoPluginIFrame").on( "load", function(){

      var emailid = /id\/(\d{1,})/.exec(window.location.pathname).pop();
      var currentmail = window.stripoCurrentLetterCode;
      var currentbody = false;
      var currentstyles = false;
      if (/<!--striporawhtml ([\s\S]+?) striporawhtml-->/gm.test(currentmail) && /<!--striporawcss ([\s\S]+?) striporawcss-->/gm.test(currentmail)) {
        currentbody = /<!--striporawhtml ([\s\S]+?) striporawhtml-->/gm.exec(currentmail).pop();
        currentbody = currentbody.replace(/comment!--/gm, '<!--');
        currentbody = currentbody.replace(/--!comment/gm, '-->');
        currentstyles = /<!--striporawcss ([\s\S]+?) striporawcss-->/gm.exec(currentmail).pop();
      }

      stripoPluginWindow.Stripo.init({
        locale: "ru",
        settingsId: 'stripoSettingsContainer',
        previewId: 'stripoPreviewContainer',
        html: currentbody ? currentbody : '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;}</style><![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--></head><body><div class="es-wrapper-color"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" src="" color="#ffffff"></v:fill></v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-email-paddings" valign="top"><table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr> <td class="es-p20t es-p20r es-p20l esd-structure" align="left"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="180" valign="top"><![endif]--><table class="es-left" cellspacing="0" cellpadding="0" align="left"><tbody><tr> <td class="es-m-p0r es-m-p20b esd-container-frame" width="180" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]--><table cellspacing="0" cellpadding="0" align="right"><tbody><tr> <td class="esd-container-frame" width="360" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--> </td></tr></tbody></table> </td></tr></tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tbody><tr> <td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr> <td class="es-p20t es-p20r es-p20l esd-structure" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-container-frame" width="560" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table><table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr> <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--><table class="es-left" cellspacing="0" cellpadding="0" align="left"><tbody><tr> <td class="es-m-p20b esd-container-frame" width="270" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--><table class="es-right" cellspacing="0" cellpadding="0" align="right"><tbody><tr> <td class="esd-container-frame" width="270" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table></div></body></html>',
        css: currentstyles ? currentstyles : '#outlook a {padding: 0;}.ExternalClass {width: 100%;}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}.es-button {mso-style-priority: 100 !important;text-decoration: none !important;}a[x-apple-data-detectors] {color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}.es-desk-hidden {display: none;float: left;overflow: hidden;width: 0;max-height: 0;line-height: 0;mso-hide: all;}html, body {width: 100%;font-family: arial, \'helvetica neue\', helvetica, sans-serif;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table {mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;}table td, html, body, .es-wrapper {padding: 0;Margin: 0;}.es-content, .es-header, .es-footer {table-layout: fixed !important;width: 100%;}img {display: block;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;}table tr {border-collapse: collapse;}p, hr {Margin: 0;}h1, h2, h3, h4, h5 {Margin: 0;line-height: 120%;mso-line-height-rule: exactly;font-family: arial, \'helvetica neue\', helvetica, sans-serif;}p, ul li, ol li, a {-webkit-text-size-adjust: none;-ms-text-size-adjust: none;mso-line-height-rule: exactly;}.es-left {float: left;}.es-right {float: right;}.es-p5 {padding: 5px;}.es-p5t {padding-top: 5px;}.es-p5b {padding-bottom: 5px;}.es-p5l {padding-left: 5px;}.es-p5r {padding-right: 5px;}.es-p10 {padding: 10px;}.es-p10t {padding-top: 10px;}.es-p10b {padding-bottom: 10px;}.es-p10l {padding-left: 10px;}.es-p10r {padding-right: 10px;}.es-p15 {padding: 15px;}.es-p15t {padding-top: 15px;}.es-p15b {padding-bottom: 15px;}.es-p15l {padding-left: 15px;}.es-p15r {padding-right: 15px;}.es-p20 {padding: 20px;}.es-p20t {padding-top: 20px;}.es-p20b {padding-bottom: 20px;}.es-p20l {padding-left: 20px;}.es-p20r {padding-right: 20px;}.es-p25 {padding: 25px;}.es-p25t {padding-top: 25px;}.es-p25b {padding-bottom: 25px;}.es-p25l {padding-left: 25px;}.es-p25r {padding-right: 25px;}.es-p30 {padding: 30px;}.es-p30t {padding-top: 30px;}.es-p30b {padding-bottom: 30px;}.es-p30l {padding-left: 30px;}.es-p30r {padding-right: 30px;}.es-p35 {padding: 35px;}.es-p35t {padding-top: 35px;}.es-p35b {padding-bottom: 35px;}.es-p35l {padding-left: 35px;}.es-p35r {padding-right: 35px;}.es-p40 {padding: 40px;}.es-p40t {padding-top: 40px;}.es-p40b {padding-bottom: 40px;}.es-p40l {padding-left: 40px;}.es-p40r {padding-right: 40px;}.es-menu td {border: 0;}.es-menu td a img {display: inline !important;}a {font-family: arial, \'helvetica neue\', helvetica, sans-serif;font-size: 14px;text-decoration: underline;}h1 {font-size: 30px;font-style: normal;font-weight: normal;color: #333333;}h1 a {font-size: 30px;}h2 {font-size: 24px;font-style: normal;font-weight: normal;color: #333333;}h2 a {font-size: 24px;}h3 {font-size: 20px;font-style: normal;font-weight: normal;color: #333333;}h3 a {font-size: 20px;}p, ul li, ol li {font-size: 14px;font-family: arial, \'helvetica neue\', helvetica, sans-serif;line-height: 150%;}ul li, ol li {Margin-bottom: 15px;}.es-menu td a {text-decoration: none;display: block;}.es-wrapper {width: 100%;height: 100%;background-image: ;background-repeat: repeat;background-position: center top;}.es-wrapper-color {background-color: #f6f6f6;}.es-content-body {background-color: #ffffff;}.es-content-body p, .es-content-body ul li, .es-content-body ol li {color: #333333;}.es-content-body a {color: #2cb543;}.es-header {background-color: transparent;background-image: ;background-repeat: repeat;background-position: center top;}.es-header-body {background-color: #ffffff;}.es-header-body p, .es-header-body ul li, .es-header-body ol li {color: #333333;font-size: 14px;}.es-header-body a {color: #1376c8;font-size: 14px;}.es-footer {background-color: transparent;background-image: ;background-repeat: repeat;background-position: center top;}.es-footer-body {background-color: #ffffff;}.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li {color: #333333;font-size: 14px;}.es-footer-body a {color: #ffffff;font-size: 14px;}.es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li {line-height: 120%;font-size: 12px;color: #cccccc;}.es-infoblock a {font-size: 12px;color: #cccccc;}a.es-button {border-style: solid;border-color: #31cb4b;border-width: 10px 20px 10px 20px;display: inline-block;background: #31cb4b;border-radius: 30px;font-size: 18px;font-family: arial, \'helvetica neue\', helvetica, sans-serif;font-weight: normal;font-style: normal;line-height: 120%;color: #ffffff;text-decoration: none;width: auto;text-align: center;}.es-button-border {border-style: solid solid solid solid;border-color: #2cb543 #2cb543 #2cb543 #2cb543;background: #2cb543;border-width: 0px 0px 2px 0px;display: inline-block;border-radius: 30px;width: auto;}@media only screen and (max-width: 600px) {p, ul li, ol li, a {font-size: 16px !important;line-height: 150% !important;}h1 {font-size: 30px !important;text-align: center;line-height: 120% !important;}h2 {font-size: 26px !important;text-align: center;line-height: 120% !important;}h3 {font-size: 20px !important;text-align: center;line-height: 120% !important;}h1 a {font-size: 30px !important;}h2 a {font-size: 26px !important;}h3 a {font-size: 20px !important;}.es-menu td a {font-size: 16px !important;}.es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a {font-size: 16px !important;}.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a {font-size: 16px !important;}.es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a {font-size: 12px !important;}*[class="gmail-fix"] {display: none !important;}.es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 {text-align: center !important;}.es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 {text-align: right !important;}.es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 {text-align: left !important;}.es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img {display: inline !important;}.es-button-border {display: block !important;}a.es-button {font-size: 20px !important;display: block !important;border-width: 10px 0px 10px 0px !important;}.es-btn-fw {border-width: 10px 0px !important;text-align: center !important;}.es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right {width: 100% !important;}.es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header {width: 100% !important;max-width: 600px !important;}.es-adapt-td {display: block !important;width: 100% !important;}.adapt-img {width: 100% !important;height: auto !important;}.es-m-p0 {padding: 0px !important;}.es-m-p0r {padding-right: 0px !important;}.es-m-p0l {padding-left: 0px !important;}.es-m-p0t {padding-top: 0px !important;}.es-m-p0b {padding-bottom: 0 !important;}.es-m-p20b {padding-bottom: 20px !important;}.es-mobile-hidden, .es-hidden {display: none !important;}.es-desk-hidden {display: table-row!important;width: auto!important;overflow: visible!important;float: none!important;max-height: inherit!important;line-height: inherit!important;}.es-desk-menu-hidden {display: table-cell!important;}table.es-table-not-adapt, .esd-block-html table {width: auto !important;}table.es-social {display: inline-block !important;}table.es-social td {display: inline-block !important;}}',
        apiRequestData: {
          emailId: emailid
        },
        getAuthToken: function(callback) {
          $.ajax({
            type: 'POST',
            url: 'https://plugins.stripo.email/api/v1/auth',
            dataType: 'json',
            headers: {
              "Content-Type" : "application/json",
              "Accept" : "application/json"
            },
            data: JSON.stringify({pluginId:window.stripoPluginId,secretKey:window.stripoSecretKey}),
            success: data => callback(data.token),
            error: error => callback(null)
          });
        },
        onTemplateLoaded: function() {
          $('#stripoPluginIFrame').contents().find('.loadingio-box').fadeOut(500);
        }
      });


      $('#stripoPluginIFrame').contents().find('#stripo_plugin_close').on("click", function(){$("#stripoPluginIFrame").remove();$('body').css("overflow","auto");});


      $('#stripoPluginIFrame').contents().find('#stripo_plugin_save').on("click", function() {
        $('#stripoPluginIFrame').contents().find('.loadingio-spinner-rolling-q3qw3bv5npn').css('display','inline-block');
        stripoPluginWindow.StripoApi.getTemplate(function(rawhtml, rawcss, width, height) {
          stripoPluginWindow.StripoApi.compileEmail(function(error, html, ampHtml, ampErrors) {
            var styles_regexp = /<style type="text\/css">((?:(?!<!--|-->)[\s\S])+?)<\/style>(?!<!\[endif\]-->)/gm;
            var styles_regexp2 = /<style type="text\/css">(?:(?!<!--|-->)[\s\S])+?<\/style>(?!<!\[endif\]-->)/gm;
            var styles = styles_regexp.exec(html).pop();
            var body = /<body[\s\S]+?>([\s\S]+?)<\/body>/gm.exec(html).pop();
            var body_styles = /<body style="((?:(?!")[\s\S]+?)+?)"/gm.exec(html).pop();
            rawhtml = rawhtml.replace(/<!--/gm, 'comment!--');
            rawhtml = rawhtml.replace(/-->/gm, '--!comment');
            var code = '<div id="stripo-godofblocks" styles="position:absolute;width:100%;height:100%;'+body_styles+'">'+
                         body +
                         '<style type="text/css">'+css_to_js_array("stripo-godofblocks", styles)+'</style>'+
                       '</div>'+
                       '<!--striporawhtml '+rawhtml+' striporawhtml-->'+
                       '<!--striporawcss '+rawcss+' striporawcss-->';

            window.stripoCurrentLetterCode = code;
            $('#Mailing_content').val(code).html(code);
            $('div.note-editable').html(
              '<iframe id="stripoLetterIFrame" frameborder="0" scrolling="no" style="width:100%;"></iframe>'
            );
            $("#stripoLetterIFrame")[0].contentWindow.document.open()
            $("#stripoLetterIFrame")[0].contentWindow.document.write(code);
            $("#stripoLetterIFrame")[0].contentWindow.document.close();
            autoResizeIFrameInit("#stripoLetterIFrame");
            $('#stripoPluginIFrame').contents().find('.loadingio-spinner-rolling-q3qw3bv5npn').css('display','none');

            if($(".note-toolbar-disabled-by-stripo").length == 0) {
              $(".note-toolbar").css("position","relative").append(`
                <div class="note-toolbar-disabled-by-stripo"><div>
                    Редактирование этого письма возможно только в редакторе Stripo.
                </div></div>
              `);
            }

          }, false);
        }, false);
      });
    });
  });

  function css_to_js_array(godofblocks, cssString) {
    godofblocks = "#"+godofblocks;
    var parser = new cssjs();
    var parsed = parser.parseCSS(cssString);
    var styles = "";
    var selector = "";

    $.each(parsed, function( index, value ) {
     if(value["type"]){
      if(value["type"] == "keyframes" || value["type"] == "imports"){
        styles += value["styles"]+"\n";
      }
      if(value["type"] == "media"){
        styles += value["selector"]+" {\n";
        $.each(value["subStyles"], function( index2, value2 ) {
          styles += "  ";
          selector = value2["selector"].split(",").join(", "+godofblocks+" ");
          styles += godofblocks+" "+selector+" {\n";
          $.each(value2["rules"], function( index3, value3 ) {
            if(value3["directive"] != "" && value3["value"] != "") {
              styles += "    ";
              styles += value3["directive"]+":"+value3["value"]+";\n";
            }
          });
          styles += "  }\n";
        });
        styles += "}\n";
      }
     } else {
      selector = value["selector"].split(",").join(", "+godofblocks+" ");
      styles += godofblocks+" "+selector+" {\n";
      $.each(value["rules"], function( index3, value3 ) {
        if(value3["directive"] != "" && value3["value"] != "") {
          styles += "  ";
          styles += value3["directive"]+":"+value3["value"]+";\n";
        }
      });
      styles += "}\n";
     }
    });
    return styles;
  }

  function autoResizeIFrame(that) {
    $(that).height(
      function() {
        return $(this).contents().find('body').height() + 20;
      }
    )
  }

  function autoResizeIFrameInit(that) {
    $(that).contents().find('body').css({
        "min-height" : "100",
        "overflow" : "hidden",
        "margin" : "0",
        "padding" : "0"
    });
    setTimeout(autoResizeIFrame(that), 0);
  }

  $('#stripoLetterIFrame').on("load resize", function(){autoResizeIFrameInit(this)});

   function mainpagestyles() { return `
#stripoPluginIFrame{
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
}
.note-editor.note-frame .note-editing-area .note-editable {
    padding: 0!important;
}
.note-toolbar-disabled-by-stripo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:table;
}
.note-toolbar-disabled-by-stripo div {
    background: #00000022;
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    text-align: right;
    padding: 5px 10px;
    background-size: 141.42px 141.42px;
    background-image: linear-gradient(45deg, #54545422 25%, #80808022 25%, #80808022 50%, #54545422 50%, #54545422 75%, #80808022 75%, #80808022 100%);
    color: #fff;
    text-shadow: 1px 1px #777;
}
  `;}

  function stripopluginstyles() { return `
.note-editor.note-frame .note-editing-area .note-editable {
    padding: 0!important;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    text-decoration: none;
}
.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.stripoTable{
    display: table;
    width: 100%;
    height: 100%;
    width: calc(100% - 70px);
    position: fixed;
    top:0; left:70px;
    background: #fff;
}
.stripoTableBody {
    display: table-row-group;
}
.stripoTableRow {
    display: table-row;
}
.stripoTableCell {
    border: 1px solid #999999;
    display: table-cell;
    padding: 0;
    border: 0;
}
#stripoPreviewContainer {
    padding-top:41px;
}
#stripoSettingsContainer {
    border-right: 1px solid #ddd;
    background-color: #f6f6f6;
}
.stripoTable .buttons {
    position:fixed;
    right: 17px;
    top: 3px;
}
@keyframes ldio-zegrl3yivoa {
    0% { transform: translate(-50%,-50%) rotate(0deg); }
    100% { transform: translate(-50%,-50%) rotate(360deg); }
}
.ldio-zegrl3yivoa div {
    position: absolute;
    width: 51px;
    height: 51px;
    border: 15px solid #a9a9a9;
    border-top-color: transparent;
    border-radius: 50%;
    animation: ldio-zegrl3yivoa 0.5s linear infinite;
    top: 50px;
    left: 50px;
    box-sizing: content-box;
}
.loadingio-spinner-rolling-q3qw3bv5npn {
    width: 24px;
    height: 24px;
    overflow: hidden;
    margin-bottom: -9px;
    display: none;
}
.ldio-zegrl3yivoa {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.24);
    backface-visibility: hidden;
    transform-origin: 0 0;
}
.loadingio-spinner-container {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -82px;
    margin-left: -72px;
    background: white;
    border: 2px solid #ddd;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 20px 20px #00000011;
}
@keyframes ldio-h6ewhw6puh4 {
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
}
.ldio-h6ewhw6puh4 div { box-sizing: border-box!important }
.ldio-h6ewhw6puh4 > div {
  position: absolute;
  width: 78px;
  height: 78px;
  top: 21px;
  left: 21px;
  border-radius: 50%;
  border: 6px solid #000;
  border-color: #32cb4b transparent #32cb4b transparent;
  animation: ldio-h6ewhw6puh4 0.641025641025641s linear infinite;
}
.ldio-h6ewhw6puh4 > div:nth-child(2) { border-color: transparent }
.ldio-h6ewhw6puh4 > div:nth-child(2) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-h6ewhw6puh4 > div:nth-child(2) div:before, .ldio-h6ewhw6puh4 > div:nth-child(2) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  top: -6px;
  left: 30px;
  background: #32cb4b;
  border-radius: 50%;
  box-shadow: 0 72px 0 0 #32cb4b;
}
.ldio-h6ewhw6puh4 > div:nth-child(2) div:after {
  left: -6px;
  top: 30px;
  box-shadow: 72px 0 0 0 #32cb4b;
}
.loadingio-spinner-dual-ring-if7ukorwxbb {
  width: 120px;
  height: 120px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-h6ewhw6puh4 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-h6ewhw6puh4 div { box-sizing: content-box; }
.loadingio-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-image: linear-gradient(135deg, #54545422 25%, #80808022 25%, #80808022 50%, #54545422 50%, #54545422 75%, #80808022 75%, #80808022 100%);
    background-size: 339.41px 339.41px;
}
`;}
})();
