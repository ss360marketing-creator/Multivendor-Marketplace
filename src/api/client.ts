export type ApiErrorPayload = {
  code: string
  message: string
}

export type ApiResponse<T> =
  | {
      success: true
      data: T
      meta?: Record<string, unknown>
    }
  | {
      success: false
      error: ApiErrorPayload
    }

export type ApiRequestOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
  body?: unknown
  token?: string | null
}

const DEFAULT_API_BASE_URL = 'https://multivendor-marketplace-z5zh.onrender.com'

export function getApiBaseUrl() {
  return import.meta.env.VITE_API_BASE_URL?.trim() || DEFAULT_API_BASE_URL
}

export async function apiRequest<T>(path: string, options: ApiRequestOptions = {}): Promise<ApiResponse<T>> {
  const headers: Record<string, string> = {
    ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
  }

  if (options.body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method: options.method ?? 'GET',
    headers,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  })

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null

  if (!payload) {
    return {
      success: false,
      error: {
        code: 'EMPTY_RESPONSE',
        message: 'The API returned an empty response.',
      },
    }
  }

  if (!response.ok || !payload.success) {
    return {
      success: false,
      error: payload.success
        ? {
            code: `HTTP_${response.status}`,
            message: 'The API request failed.',
          }
        : payload.error,
    }
  }

  return payload
}
