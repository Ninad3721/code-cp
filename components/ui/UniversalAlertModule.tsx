import { RocketIcon } from '@radix-ui/react-icons'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type alertDetails = {
  alertType: string
  message: string
}

export default function UniversalAlertModule(props: alertDetails) {
  if (props.alertType === 'success') {
    return (
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>{props.message}</AlertDescription>
      </Alert>
    )
  } else {
    return (
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{props.message}</AlertDescription>
      </Alert>
    )
  }
}
