export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      drottgardrs: {
        Row: {
          created_at: string | null;
          id: string;
          level: number;
          name: string;
          profile_id: string | null;
          worker_count: number;
          xp: number;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          level?: number;
          name: string;
          profile_id?: string | null;
          worker_count?: number;
          xp?: number;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          level?: number;
          name?: string;
          profile_id?: string | null;
          worker_count?: number;
          xp?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'drottgardrs_profile_id_fkey';
            columns: ['profile_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      drottgardrs_resources: {
        Row: {
          drottgardr_id: string | null;
          id: string;
          quantity: number;
          resource_id: number | null;
          updated_at: string | null;
        };
        Insert: {
          drottgardr_id?: string | null;
          id?: string;
          quantity?: number;
          resource_id?: number | null;
          updated_at?: string | null;
        };
        Update: {
          drottgardr_id?: string | null;
          id?: string;
          quantity?: number;
          resource_id?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'drottgardrs_resources_drottgardr_id_fkey';
            columns: ['drottgardr_id'];
            isOneToOne: false;
            referencedRelation: 'drottgardrs';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'drottgardrs_resources_resource_id_fkey';
            columns: ['resource_id'];
            isOneToOne: false;
            referencedRelation: 'resources';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          bio: string | null;
          created_at: string | null;
          id: string;
          username: string;
          onboarding_completed: boolean;
        };
        Insert: {
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string | null;
          id: string;
          username: string;
          onboarding_completed?: boolean;
        };
        Update: {
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string | null;
          id?: string;
          username?: string;
          onboarding_completed?: boolean;
        };
        Relationships: [];
      };
      resources: {
        Row: {
          emoji: string | null;
          id: number;
          name: string;
          production_per_worker: number;
          pronounciation: string;
        };
        Insert: {
          emoji?: string | null;
          id: number;
          name: string;
          production_per_worker: number;
          pronounciation: string;
        };
        Update: {
          emoji?: string | null;
          id?: number;
          name?: string;
          production_per_worker?: number;
          pronounciation?: string;
        };
        Relationships: [];
      };
      workers: {
        Row: {
          assigned_to: number | null;
          created_at: string | null;
          drottgardr_id: string | null;
          id: string;
          name: string;
          type: 'woodcutter' | 'miner' | 'farmer';
          level: number;
          experience: number;
        };
        Insert: {
          assigned_to?: number | null;
          created_at?: string | null;
          drottgardr_id?: string | null;
          id?: string;
          name: string;
          type: 'woodcutter' | 'miner' | 'farmer';
          level?: number;
          experience?: number;
        };
        Update: {
          assigned_to?: number | null;
          created_at?: string | null;
          drottgardr_id?: string | null;
          id?: string;
          name?: string;
          type?: 'woodcutter' | 'miner' | 'farmer';
          level?: number;
          experience?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'workers_assigned_to_fkey';
            columns: ['assigned_to'];
            isOneToOne: false;
            referencedRelation: 'resources';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workers_drottgardr_id_fkey';
            columns: ['drottgardr_id'];
            isOneToOne: false;
            referencedRelation: 'drottgardrs';
            referencedColumns: ['id'];
          },
        ];
      };
      xp_table: {
        Row: {
          level: number;
          required_xp: number;
        };
        Insert: {
          level: number;
          required_xp: number;
        };
        Update: {
          level?: number;
          required_xp?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums'] | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
