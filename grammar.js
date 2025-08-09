/**
 * @file A dependently typed functional programming language, with QTT
 * @author Asher Frost
 * @license BSD-2
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "idris2",
  extras: $ => [
    /\s/,
    $.line_comment,
    $.block_comment
  ],
  rules: {
    line_comment: $ => /\-\-+?[^\}].+?\n/,
    on_off: $ => choice(
      "on",
      "off"
    ),
    integer: $ => /\d+/,
    float: $ => /\d+\.\d+/,
    string: $ => /\".*?\"/,

    block_comment: $ => /\{\-.*?\-\}/,
    source_file: $ => "hello",
    big_symbol: $ => /[A-Z][a-zA-Z0-9\'\_]*/,
    small_symbol: $ => /[a-z][a-zA-Z0-9\'\_]*/,
    wild_symbol: $ => /\_[a-zA-Z0-9\'\_]*/,
    op_symbol: $ => /[\:\!\#\$\%\&\*\+\.\/<\=>\?\@\\^\|\-\~]+/,
    _symbol: $ => choice(
      $.big_symbol,
      $.small_symbol
    ),
    record_proj: $ => seq(
      ".",
      token.immediate($._symbol)
    ),
    _atom: $ => choice(
      $.integer,
      $.float,
      $.string,
      $.big_symbol,
      $.small_symbol,
      $.wild_symbol,
    )
    _type: $ => "Type",
    _expr: $ => $._symbol, 
    // TODO: add the actual grammar rules
    
  }
});
