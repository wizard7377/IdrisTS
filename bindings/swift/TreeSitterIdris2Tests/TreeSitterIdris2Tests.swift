import XCTest
import SwiftTreeSitter
import TreeSitterIdris2

final class TreeSitterIdris2Tests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_idris2())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Idris2 grammar")
    }
}
