// 로딩 스피너 컴포넌트 props 타입 정의
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

// 로딩 상태를 표시하는 스피너 컴포넌트
export default function LoadingSpinner({ 
  size = 'md', 
  className = '' 
}: LoadingSpinnerProps) {
  // 크기별 스타일 정의
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin`}
        role="status"
        aria-label="로딩 중"
      >
        <span className="sr-only">로딩 중...</span>
      </div>
    </div>
  )
} 