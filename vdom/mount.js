export default ($node, $targetNode) => {
    $targetNode.replaceWith($node);
    return $node;
}