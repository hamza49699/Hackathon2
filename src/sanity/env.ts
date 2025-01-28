export const apiVersion =
<<<<<<< HEAD
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-27'
=======
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-26'
>>>>>>> 1aa785ae1fc098ae8063f8ef6ebacd2f96aba2d5

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
