import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { setupTools } from './register-tools';

export const createMcpServer = () => {
  const mcpServer = new McpServer(
    {
      name: 'ChromeMcpServer',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  setupTools(mcpServer);
  return mcpServer;
};
