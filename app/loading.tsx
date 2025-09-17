import { LoadingState } from './components/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingState message="Loading page..." />
    </div>
  )
}
