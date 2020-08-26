import visit from 'unist-util-visit';

export default function attacher() {
  const visitor = (node) => {
    const { checked } = node;

    node.value = `<input type="checkbox" disabled checked="${checked}" />`;
  }

  return root => visit(root, 'listItem', visitor);
}