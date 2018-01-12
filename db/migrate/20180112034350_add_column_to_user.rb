class AddColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :host, :boolean, default: false
  end
  add_reference :spots, :host, references: :users
end
