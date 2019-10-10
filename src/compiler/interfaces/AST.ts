import { IASTScope } from '../Visitor/Visitor';

export interface ASTNode {
  $fuse_classInitializers?: Array<ASTNode>;
  $fuse_decoratorsCaptured?: boolean;
  $fuse_visited?: boolean;
  $fuse_decoratorsProcessed?: boolean;
  $fuse_decoratorForClassIdentifier?: string;
  $transpiled?: boolean;
  elements?: Array<ASTNode>;
  alternate?: ASTNode;
  scope?: IASTScope;
  prefix?: boolean;
  decorators?: Array<ASTNode>;
  loc?: { start: { line: number; column: number }; end: { line: number; column: number } };
  consequent?: ASTNode;
  type: ASTNodeType;
  shorthand?: boolean;
  specifiers?: Array<ASTNode>;
  test?: ASTNode;
  initializer?: ASTNode;

  imported?: ASTNode;
  source?: ASTNode;
  method?: boolean;
  members?: Array<ASTNode>;

  JSXElement?: ASTNode;

  children?: Array<ASTNode>;
  attributes?: Array<ASTNode>;
  openingElement?: ASTNode;
  closingElement?: ASTNode;
  argument?: ASTNode;

  local?: ASTNode;
  exported?: ASTNode;
  name?: any;
  kind?: string;
  init?: null | ASTNode;
  declarations?: Array<ASTNode>;
  declaration?: ASTNode;
  id?: ASTNode;
  body?: Array<ASTNode> | ASTNode;
  expression?: any;
  callee?: ASTNode;
  params?: Array<ASTNode>;
  async?: boolean;
  generator?: boolean;
  arguments?: Array<ASTNode>;
  operator?: string;
  left?: ASTNode;
  right?: ASTNode;
  value?: any;
  key?: ASTNode;
  abstract?: boolean;
  properties?: Array<ASTNode>;
  object?: ASTNode;
  property?: ASTNode;
  declare?: boolean;
  implements?: Array<ASTNode>;
  superClass?: ASTNode;
  static?: boolean;
  computed?: boolean;
  accessibility?: string;
  parameter?: ASTNode;
}
export type ASTNodeType =
  | 'Line'
  | 'Block'
  | 'HTMLOpen'
  | 'HTMLClose'
  | 'ArrayExpression'
  | 'ArrayPattern'
  | 'ArrowFunctionExpression'
  | 'AssignmentExpression'
  | 'AssignmentPattern'
  | 'AwaitExpression'
  | 'BigIntLiteral'
  | 'BinaryExpression'
  | 'BlockStatement'
  | 'BreakStatement'
  | 'CallExpression'
  | 'CatchClause'
  | 'ClassBody'
  | 'ClassDeclaration'
  | 'ClassExpression'
  | 'ClassProperty'
  | 'ConditionalExpression'
  | 'ContinueStatement'
  | 'DebuggerStatement'
  | 'Decorator'
  | 'DoWhileStatement'
  | 'EmptyStatement'
  | 'ExportAllDeclaration'
  | 'ExportDefaultDeclaration'
  | 'ExportNamedDeclaration'
  | 'ExportSpecifier'
  | 'ExpressionStatement'
  | 'ForInStatement'
  | 'ForOfStatement'
  | 'ForStatement'
  | 'FunctionDeclaration'
  | 'FunctionExpression'
  | 'Identifier'
  | 'IfStatement'
  | 'Import'
  | 'ImportDeclaration'
  | 'ImportDefaultSpecifier'
  | 'ImportNamespaceSpecifier'
  | 'ImportSpecifier'
  | 'JSXAttribute'
  | 'JSXClosingElement'
  | 'JSXClosingFragment'
  | 'JSXElement'
  | 'JSXEmptyExpression'
  | 'JSXExpressionContainer'
  | 'JSXFragment'
  | 'JSXIdentifier'
  | 'JSXMemberExpression'
  | 'JSXOpeningElement'
  | 'JSXOpeningFragment'
  | 'JSXSpreadAttribute'
  | 'JSXSpreadChild'
  | 'JSXText'
  | 'LabeledStatement'
  | 'Literal'
  | 'LogicalExpression'
  | 'MemberExpression'
  | 'MetaProperty'
  | 'MethodDefinition'
  | 'NewExpression'
  | 'ObjectExpression'
  | 'ObjectPattern'
  | 'Program'
  | 'module'
  | 'script'
  | 'Property'
  | 'RestElement'
  | 'ReturnStatement'
  | 'SequenceExpression'
  | 'SpreadElement'
  | 'Super'
  | 'SwitchCase'
  | 'SwitchStatement'
  | 'TaggedTemplateExpression'
  | 'TemplateElement'
  | 'TemplateLiteral'
  | 'ThisExpression'
  | 'ThrowStatement'
  | 'TryStatement'
  | 'AbstractClassProperty'
  | 'AbstractKeyword'
  | 'AbstractMethodDefinition'
  | 'AnyKeyword'
  | 'ArrayType'
  | 'AsExpression'
  | 'AsyncKeyword'
  | 'BigIntKeyword'
  | 'BooleanKeyword'
  | 'CallSignatureDeclaration'
  | 'ClassImplements'
  | 'ConditionalType'
  | 'ConstructorType'
  | 'ConstructSignatureDeclaration'
  | 'DeclareFunction'
  | 'DeclareKeyword'
  | 'EmptyBodyFunctionExpression'
  | 'EnumDeclaration'
  | 'EnumMember'
  | 'ExportAssignment'
  | 'ExportKeyword'
  | 'ExternalModuleReference'
  | 'FunctionType'
  | 'ImportExpression'
  | 'ImportEqualsDeclaration'
  | 'ImportType'
  | 'IndexedAccessType'
  | 'IndexSignature'
  | 'InferType'
  | 'InterfaceDeclaration'
  | 'InterfaceBody'
  | 'InterfaceHeritage'
  | 'IntersectionType'
  | 'LiteralType'
  | 'MappedType'
  | 'MethodSignature'
  | 'ModuleBlock'
  | 'ModuleDeclaration'
  | 'NamespaceExportDeclaration'
  | 'NeverKeyword'
  | 'NonNullExpression'
  | 'NullKeyword'
  | 'NumberKeyword'
  | 'ObjectKeyword'
  | 'OptionalType'
  | 'ParameterProperty'
  | 'ParenthesizedType'
  | 'PropertySignature'
  | 'PublicKeyword'
  | 'PrivateKeyword'
  | 'ProtectedKeyword'
  | 'QualifiedName'
  | 'ReadonlyKeyword'
  | 'RestType'
  | 'StaticKeyword'
  | 'StringKeyword'
  | 'SymbolKeyword'
  | 'ThisType'
  | 'TupleType'
  | 'TypeAliasDeclaration'
  | 'TypeAnnotation'
  | 'TypeAssertion'
  | 'TypeLiteral'
  | 'TypeOperator'
  | 'TypeParameter'
  | 'TypeParameterDeclaration'
  | 'TypeParameterInstantiation'
  | 'TypePredicate'
  | 'JSDocNullableType'
  | 'JSDocUnknownType'
  | 'TypeQuery'
  | 'TypeReference'
  | 'UndefinedKeyword'
  | 'UnionType'
  | 'UnknownKeyword'
  | 'VoidKeyword'
  | 'UpdateExpression'
  | 'UnaryExpression'
  | 'VariableDeclaration'
  | 'VariableDeclarator'
  | 'WhileStatement'
  | 'WithStatement'
  | 'YieldExpression';
