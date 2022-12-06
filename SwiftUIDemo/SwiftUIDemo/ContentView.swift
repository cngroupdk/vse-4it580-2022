//
//  ContentView.swift
//  SwiftUIDemo
//
//  Created by Tomáš Horáček on 06.12.2022.
//

import SwiftUI

struct ContentView: View {
    var items: [ListItem] = [
        .init(id: "0", name: "0"),
        .init(id: "1", name: "1"),
        .init(id: "2", name: "2"),
        .init(id: "3", name: "3")
    ]
    
    var body: some View {
        VStack {
            HStack {
                Image(systemName: "globe")
                    .imageScale(.large)
                    .foregroundColor(.accentColor)
                Text("Hello, 123!")
                
            }
            
            Text("Hello, 321!")
            
            Text("Hello, Abc!")
            
            List(items, id: \.id) { item in
                ListItemView(item: item)
            }
            
            
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
