// ==UserScript==
// @name         Stripo Mail for GetCourse
// @version      1.0.1
// @date         2020.02.25
// @description  Создание писем в GetCourse стало ещё проще!
// @author       Dmitry Space
// @match        *://*/notifications/control/mailings/update/id/*
// @grant        none
// ==/UserScript==

window.stripoPluginId = "8f6857f29add40cfafab84c88c1d0516";
window.stripoSecretKey = "9d4fb18eb9c74d95a2e868d8600d4e68";

(function() {
    'use strict';

  var godofblocks_id = "stripo-godofblocks";

  $("head").append('<link href="https://gitcdn.link/repo/DmitrySpace/Stripo-Mail-for-GetCourse/master/styles.css" rel="stylesheet" type="text/css">');

  $('#getAnalysis').after(
    '<a href="javascript:void(0)" onclick="$(\'.stripoTable\').show(0)" id="stripo_plugin_open" class="btn btn-success" style="margin-left: 15px; background-color: #d0d0d0!important; border-color: #b6b6b6!important;"><span class="glyphicon glyphicon-hourglass"></span> Открыть в Stripo</a>'
  );

  function stripo_is_ready(){
    $('#stripo_plugin_open').css({
     'background-color': '#5cb85c',
     'border-color': '#4cae4c'
    }).html('<span class="glyphicon glyphicon-tasks"></span> Открыть Stripo');
  }

  $('body').on("click",'#stripo_plugin_open', function() {

    $('body').append(
      '<div class="stripoTable">'+
        '<div class="stripoTableBody">'+
          '<div class="stripoTableRow">'+
            '<div id="stripoSettingsContainer" class="stripoTableCell" style="width:25%;"></div>'+
            '<div id="stripoPreviewContainer" class="stripoTableCell" style="width:75%;"></div>'+
          '</div>'+
        '</div>'+
        '<div class="buttons">'+
          '<div class="loadingio-spinner-rolling-q3qw3bv5npn"><div class="ldio-zegrl3yivoa"><div></div></div></div>'+
          '<a href="javascript:void(0)" id="stripo_plugin_save" class="btn btn-success" style="margin-left: 15px"><span class="glyphicon glyphicon-ok"></span> &nbsp;Готово</a>'+
          '<a href="javascript:void(0)" onclick="$(\'.stripoTable\').remove()" id="stripo_plugin_close" class="btn btn-default" style="margin-left: 15px"><span class="glyphicon glyphicon-remove"></span> &nbsp;Закрыть Stripo</a>'+
        '</div>'+
      '</div>'
    );

    var emailid = /id\/(\d{1,})/.exec(window.location.pathname).pop();
    var currentmail = $('div.note-editable').html();
    var currentbody = false;
    var currentstyles = false;
    if (/es-wrapper/.test(currentmail)) {
      var godofblocks_div_regexp = new RegExp('(<div id="'+godofblocks_id+'"[\s\S]*?>)', 'gm');
      currentbody = currentmail.replace(/(<\/div><style[\s\S]+?>[\s\S]+?<\/style>)/gm, "");
      currentbody = currentbody.replace(godofblocks_div_regexp, "");
      currentbody = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;}</style><![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--></head><body>'+currentbody+'</body></html>';
      currentstyles = /<style[\s\S]+?>([\s\S]+?)<\/style>/gm.exec(currentmail).pop();
    }

    window.Stripo.init({
      locale: "ru",
      settingsId: 'stripoSettingsContainer',
      previewId: 'stripoPreviewContainer',
      html: currentbody ? currentbody : '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]><style type="text/css"> a {text-decoration: none;}</style><![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--></head><body><div class="es-wrapper-color"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" src="" color="#ffffff"></v:fill></v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-email-paddings" valign="top"><table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr> <td class="es-p20t es-p20r es-p20l esd-structure" align="left"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="180" valign="top"><![endif]--><table class="es-left" cellspacing="0" cellpadding="0" align="left"><tbody><tr> <td class="es-m-p0r es-m-p20b esd-container-frame" width="180" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]--><table cellspacing="0" cellpadding="0" align="right"><tbody><tr> <td class="esd-container-frame" width="360" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--> </td></tr></tbody></table> </td></tr></tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tbody><tr> <td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr> <td class="es-p20t es-p20r es-p20l esd-structure" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-container-frame" width="560" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table><table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr> <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--><table class="es-left" cellspacing="0" cellpadding="0" align="left"><tbody><tr> <td class="es-m-p20b esd-container-frame" width="270" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr> <td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--><table class="es-right" cellspacing="0" cellpadding="0" align="right"><tbody><tr> <td class="esd-container-frame" width="270" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table> </td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table></div></body></html>',
      css: currentstyles ? currentstyles : '#outlook a{padding:0}.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:100%}.es-button{mso-style-priority:100!important;text-decoration:none!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}.es-desk-hidden{display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all}html,body{width:100%;font-family:arial,"helvetica neue",helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0}table td,html,body,.es-wrapper{padding:0;margin:0}.es-content,.es-header,.es-footer{table-layout:fixed!important;width:100%}img{display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic}table tr{border-collapse:collapse}p,hr{margin:0}h1,h2,h3,h4,h5{margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial,"helvetica neue",helvetica,sans-serif}p,ul li,ol li,a{-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly}.es-left{float:left}.es-right{float:right}.es-p5{padding:5px}.es-p5t{padding-top:5px}.es-p5b{padding-bottom:5px}.es-p5l{padding-left:5px}.es-p5r{padding-right:5px}.es-p10{padding:10px}.es-p10t{padding-top:10px}.es-p10b{padding-bottom:10px}.es-p10l{padding-left:10px}.es-p10r{padding-right:10px}.es-p15{padding:15px}.es-p15t{padding-top:15px}.es-p15b{padding-bottom:15px}.es-p15l{padding-left:15px}.es-p15r{padding-right:15px}.es-p20{padding:20px}.es-p20t{padding-top:20px}.es-p20b{padding-bottom:20px}.es-p20l{padding-left:20px}.es-p20r{padding-right:20px}.es-p25{padding:25px}.es-p25t{padding-top:25px}.es-p25b{padding-bottom:25px}.es-p25l{padding-left:25px}.es-p25r{padding-right:25px}.es-p30{padding:30px}.es-p30t{padding-top:30px}.es-p30b{padding-bottom:30px}.es-p30l{padding-left:30px}.es-p30r{padding-right:30px}.es-p35{padding:35px}.es-p35t{padding-top:35px}.es-p35b{padding-bottom:35px}.es-p35l{padding-left:35px}.es-p35r{padding-right:35px}.es-p40{padding:40px}.es-p40t{padding-top:40px}.es-p40b{padding-bottom:40px}.es-p40l{padding-left:40px}.es-p40r{padding-right:40px}.es-menu td{border:0}.es-menu td a img{display:inline!important}a{font-family:arial,"helvetica neue",helvetica,sans-serif;font-size:14px;text-decoration:underline}h1{font-size:30px;font-style:normal;font-weight:400;color:#333}h1 a{font-size:30px}h2{font-size:24px;font-style:normal;font-weight:400;color:#333}h2 a{font-size:24px}h3{font-size:20px;font-style:normal;font-weight:400;color:#333}h3 a{font-size:20px}p,ul li,ol li{font-size:14px;font-family:arial,"helvetica neue",helvetica,sans-serif;line-height:150%}ul li,ol li{margin-bottom:15px}.es-menu td a{text-decoration:none;display:block}.es-wrapper{width:100%;height:100%;background-repeat:repeat;background-position:center top}.es-wrapper-color{background-color:#f6f6f6}.es-content-body{background-color:#fff}.es-content-body p,.es-content-body ul li,.es-content-body ol li{color:#333}.es-content-body a{color:#2cb543}.es-header{background-color:transparent;background-repeat:repeat;background-position:center top}.es-header-body{background-color:#fff}.es-header-body p,.es-header-body ul li,.es-header-body ol li{color:#333;font-size:14px}.es-header-body a{color:#1376c8;font-size:14px}.es-footer{background-color:transparent;background-repeat:repeat;background-position:center top}.es-footer-body{background-color:#fff}.es-footer-body p,.es-footer-body ul li,.es-footer-body ol li{color:#333;font-size:14px}.es-footer-body a{color:#fff;font-size:14px}.es-infoblock,.es-infoblock p,.es-infoblock ul li,.es-infoblock ol li{line-height:120%;font-size:12px;color:#ccc}.es-infoblock a{font-size:12px;color:#ccc}a.es-button{border-style:solid;border-color:#31cb4b;border-width:10px 20px;display:inline-block;background:#31cb4b;border-radius:30px;font-size:18px;font-family:arial,"helvetica neue",helvetica,sans-serif;font-weight:400;font-style:normal;line-height:120%;color:#fff;text-decoration:none;width:auto;text-align:center}.es-button-border{border-style:solid;border-color:#2cb543;background:#2cb543;border-width:0 0 2px;display:inline-block;border-radius:30px;width:auto}@media only screen and (max-width: 600px){p,ul li,ol li,a{font-size:16px!important;line-height:150%!important}h1{font-size:30px!important;text-align:center;line-height:120%!important}h2{font-size:26px!important;text-align:center;line-height:120%!important}h3{font-size:20px!important;text-align:center;line-height:120%!important}h1 a{font-size:30px!important}h2 a{font-size:26px!important}h3 a{font-size:20px!important}.es-menu td a{font-size:16px!important}.es-header-body p,.es-header-body ul li,.es-header-body ol li,.es-header-body a{font-size:16px!important}.es-footer-body p,.es-footer-body ul li,.es-footer-body ol li,.es-footer-body a{font-size:16px!important}.es-infoblock p,.es-infoblock ul li,.es-infoblock ol li,.es-infoblock a{font-size:12px!important}[class="gmail-fix"]{display:none!important}.es-m-txt-c,.es-m-txt-c h1,.es-m-txt-c h2,.es-m-txt-c h3{text-align:center!important}.es-m-txt-r,.es-m-txt-r h1,.es-m-txt-r h2,.es-m-txt-r h3{text-align:right!important}.es-m-txt-l,.es-m-txt-l h1,.es-m-txt-l h2,.es-m-txt-l h3{text-align:left!important}.es-m-txt-r img,.es-m-txt-c img,.es-m-txt-l img{display:inline!important}.es-button-border{display:block!important}a.es-button{font-size:20px!important;display:block!important;border-width:10px 0!important}.es-btn-fw{border-width:10px 0!important;text-align:center!important}.es-adaptive table,.es-btn-fw,.es-btn-fw-brdr,.es-left,.es-right{width:100%!important}.es-content table,.es-header table,.es-footer table,.es-content,.es-footer,.es-header{width:100%!important;max-width:600px!important}.es-adapt-td{display:block!important;width:100%!important}.adapt-img{width:100%!important;height:auto!important}.es-m-p0{padding:0!important}.es-m-p0r{padding-right:0!important}.es-m-p0l{padding-left:0!important}.es-m-p0t{padding-top:0!important}.es-m-p0b{padding-bottom:0!important}.es-m-p20b{padding-bottom:20px!important}.es-mobile-hidden,.es-hidden{display:none!important}.es-desk-hidden{display:table-row!important;width:auto!important;overflow:visible!important;float:none!important;max-height:inherit!important;line-height:inherit!important}.es-desk-menu-hidden{display:table-cell!important}table.es-table-not-adapt,.esd-block-html table{width:auto!important}table.es-social{display:inline-block!important}table.es-social td{display:inline-block!important}}',
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
      }
    });
  });

addJS_Node (null, "https://plugins.stripo.email/static/latest/stripo.js", null, stripo_is_ready);
addJS_Node (null, "https://cdn.rawgit.com/jotform/css.js/master/css.min.js", null, stripo_is_ready);

$('body').on("click",'#stripo_plugin_save', function() {
  $('.loadingio-spinner-rolling-q3qw3bv5npn').css('display','inline-block');
  window.StripoApi.getTemplate(function(html, css, width, height) {
    var styles = css_to_js_array(godofblocks_id, css);
    var body_style = /<body style="(((?!")[\s\S]+?)+?)"/gm.test(html) ? /<body style="(((?!")[\s\S]+?)+?)"/gm.exec(html).pop() : "";
    var body = /<body[\s\S]+?>([\s\S]+?)<\/body>/gm.test(html) ? /<body[\s\S]+?>([\s\S]+?)<\/body>/gm.exec(html).pop() : "";
    var code = '<div id="'+godofblocks_id+'" styles="position:absolute;width:100%;height:100%;">'+body+'</div><style type="text/css">'+styles+'</style>'; //body {'+body_style+'}

/*window.StripoApi.compileEmail(function(error, html, ampHtml, ampErrors) {
  var styles = /<style type="text\/css">((?:(?!<!--|-->)[\s\S])+?)<\/style>(?!<!\[endif\]-->)/gm.exec(html).pop();
  var body_style = /<body style="(((?!")[\s\S]+?)+?)"/gm.exec(html).pop();
  var body = /<body[\s\S]+?>([\s\S]+?)<\/body>/gm.exec(html).pop();
  var code = body+'<style type="text/css">'+styles+'</style>'; //body {'+body_style+'}
*/
    $('#Mailing_content, div.note-editable').val(code).html(code);
    $('.loadingio-spinner-rolling-q3qw3bv5npn').css('display','none');
  }, false);
});


function addJS_Node (text, s_URL, funcToRun, runOnLoad) {
    var D                                   = document;
    var scriptNode                          = D.createElement ('script');
    if (runOnLoad) {
        scriptNode.addEventListener ("load", runOnLoad, false);
    }
    scriptNode.type                         = "text/javascript";
    if (text)       scriptNode.textContent  = text;
    if (s_URL)      scriptNode.src          = s_URL;
    if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (scriptNode);
}

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

})();
