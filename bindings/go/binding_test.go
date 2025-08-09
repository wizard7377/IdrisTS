package tree_sitter_idris2_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_idris2 "github.com/tree-sitter/tree-sitter-idris2/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_idris2.Language())
	if language == nil {
		t.Errorf("Error loading Idris2 grammar")
	}
}
