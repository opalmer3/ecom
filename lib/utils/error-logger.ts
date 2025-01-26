interface ErrorDetail {
  message: string;
  path?: string[];
  code?: string;
}

export function logError(
  error: ErrorDetail | ErrorDetail[],
  context?: Record<string, unknown>
) {
  console.error(
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        errors: Array.isArray(error) ? error : [error],
        context,
      },
      null,
      2
    )
  );
}
