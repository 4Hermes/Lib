export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      checkins: {
        Row: {
          createdAt: string | null
          friendId: string
          id: string
          messageAttempts: number | null
          status: string | null
          userId: string
        }
        Insert: {
          createdAt?: string | null
          friendId: string
          id?: string
          messageAttempts?: number | null
          status?: string | null
          userId: string
        }
        Update: {
          createdAt?: string | null
          friendId?: string
          id?: string
          messageAttempts?: number | null
          status?: string | null
          userId?: string
        }
      }
      friends: {
        Row: {
          contactId: string
          createdAt: string | null
          id: string
          lastContactedAt: string | null
          lastModifiedAt: string | null
          messageAttempts: number | null
          messagePrompt: string | null
        }
        Insert: {
          contactId: string
          createdAt?: string | null
          id?: string
          lastContactedAt?: string | null
          lastModifiedAt?: string | null
          messageAttempts?: number | null
          messagePrompt?: string | null
        }
        Update: {
          contactId?: string
          createdAt?: string | null
          id?: string
          lastContactedAt?: string | null
          lastModifiedAt?: string | null
          messageAttempts?: number | null
          messagePrompt?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
